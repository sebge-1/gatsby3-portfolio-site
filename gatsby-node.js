const path = require('path')

module.exports.createPages = async ({graphql, actions }) => {
  const {createPage} = actions;
  const blogTemplate = path.resolve('./src/templates/blogPost.js');
  const categoryTemplate = path.resolve('./src/templates/categoryPage.js');

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
            tag
          }
        }
      }
    }
  `)

  const tags = new Set();

  res.data.allContentfulBlogPost.edges
    .forEach((edge) => {
      createPage(
        {
          component: blogTemplate,
          path: `/blog/${edge.node.slug}`,
          context: {
            slug: edge.node.slug
          }
        }
      );
      edge.node.tag.forEach(tag => tags.add(tag))
    });
  
  tags.forEach((tag) => {
    createPage(
      {
        component: categoryTemplate,
        path: `/blog/tags/${tag}`,
        context: {
          tag: tag
        }
      });
  }) 
}