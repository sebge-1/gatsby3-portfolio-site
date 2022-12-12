const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blogPost.js");
  const categoryTemplate = path.resolve("./src/templates/categoryPage.js");

  const res = await graphql(`
    query {
      allContentfulBlogPost(sort: { publishedDate: DESC }) {
        edges {
          node {
            title
            slug
            heroImage {
              gatsbyImageData
              description
            }
            tldr {
              internal {
                content
              }
            }
            publishedDate(formatString: "MMMM Do, YYYY")
            content {
              raw
            }
            tag
            section
          }
        }
      }
    }
  `);

  const posts = res.data.allContentfulBlogPost.edges;
  const tagList = new Set();
  posts.forEach((post) => {
    post.node.tag.forEach((tag) => tagList.add(tag));
  });
  const tags = [];
  tagList.forEach((tag) => {
    filteredPosts = posts.filter((post) => post.node.tag.includes(tag));
    tags.push({ tagName: tag, postCount: filteredPosts.length });
  });
  // 1. Create Individual Blog Post Pages
  posts.forEach((post, index) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${post.node.slug}`,
      context: {
        slug: post.node.slug,
        tags,
        posts,
        index: index + 1,
        pathPrefix: "/blog",
      },
    });
  });
  // 2. Create Tag Pages
  tagList.forEach((tag) => {
    let filteredPosts = posts.filter((post) => post.node.tag.includes(tag));
    let prefix = "/blog/tags";
    createPaginatedPages({
      edges: filteredPosts,
      createPage,
      pageTemplate: categoryTemplate,
      pageLength: 6,
      pathPrefix: `${prefix}/${tag}`,
      context: { tag, tags: [...tags], pathPrefix: `${prefix}/${tag}` },
    });
  });
  // 3. Create Blog List Pages
  createPaginatedPages({
    edges: posts,
    createPage,
    pageTemplate: "src/templates/blog-list-template.js",
    pageLength: 6,
    pathPrefix: "blog",
    context: { tags: [...tags], pathPrefix: "blog" },
  });
};
