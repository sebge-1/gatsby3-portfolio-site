const path = require("path");
const createPaginatedPages = require("gatsby-paginate");
const { slugify } = require("./src/utils/slugify");

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
              gatsbyImageData(height: 300, placeholder: BLURRED)
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
  let tags = [];
  tagList.forEach((tag) => {
    filteredPosts = posts.filter((post) => post.node.tag.includes(tag));
    tags.push({ tagName: tag, postCount: filteredPosts.length });
  });
  tags = tags.sort((a, b) => (a.tagName > b.tagName ? 1 : -1));
  console.log(tags);
  // 1. Create Individual Blog Post Pages
  posts.forEach((post, index) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${post.node.slug}`,
      context: {
        slug: post.node.slug,
        tags,
        posts,
        post,
        index,
        pathPrefix: "/blog",
      },
    });
  });
  // 2. Create Tag Pages
  [...tagList].sort().forEach((tag) => {
    const slug = slugify(tag);
    let filteredPosts = posts.filter((post) => post.node.tag.includes(tag));
    let prefix = "/blog/tags";
    createPaginatedPages({
      edges: filteredPosts,
      createPage,
      pageTemplate: categoryTemplate,
      pageLength: 6,
      pathPrefix: `${prefix}/${slug}`,
      context: { slug, tags: [...tags], pathPrefix: `${prefix}/${slug}` },
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
