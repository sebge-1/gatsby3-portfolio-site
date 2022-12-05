const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blogPost.js");
  const categoryTemplate = path.resolve("./src/templates/categoryPage.js");

  const res = await graphql(`
    query {
      allContentfulBlogPost {
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
          }
        }
      }
    }
  `);

  const posts = res.data.allContentfulBlogPost.edges;
  const tags = new Set();
  // 1. Create Individual Blog Post Pages
  posts.forEach((post) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${post.node.slug}`,
      context: {
        slug: post.node.slug,
      },
    });
    post.node.tag.forEach((tag) => tags.add(tag));
  });
  // 2. Create Tag Pages
  tags.forEach((tag) => {
    filteredPosts = posts.filter((post) => post.node.tag.includes(tag));
    createPaginatedPages({
      edges: filteredPosts,
      createPage,
      pageTemplate: categoryTemplate,
      pageLength: 2,
      pathPrefix: `/blog/tags/${tag}`,
      context: { tag, tags: [...tags] },
    });
  });
  // 3. Create Blog List Pages
  createPaginatedPages({
    edges: posts,
    createPage,
    pageTemplate: "src/templates/blog-list-template.js",
    pageLength: 4,
    pathPrefix: "blog",
    context: { tags: [...tags] },
  });
};
