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

  const tags = new Set();

  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
    edge.node.tag.forEach((tag) => tags.add(tag));
  });

  tags.forEach((tag) => {
    createPage({
      component: categoryTemplate,
      path: `/blog/tags/${tag}`,
      context: {
        tag: tag,
      },
    });
  });
  const posts = res.data.allContentfulBlogPost.edges;

  createPaginatedPages({
    edges: posts,
    createPage,
    pageTemplate: "src/templates/blog-list-template.js",
    pageLength: 4,
    pathPrefix: "blog",
  });
  // const postsPerPage = 6;
  // const numPages = Math.ceil(posts.length / postsPerPage);
  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/blog` : `/blog/${i + 1}`,
  //     component: path.resolve("./src/templates/blog-list-template.js"),
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   });
  // });
};
