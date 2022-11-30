import React from 'react';
import { StaticQuery, graphql} from "gatsby"
import BlogContainer from '../components/BlogContainer.js';
import { Container } from '@mui/material';

export default (props) => {
  return <StaticQuery
    query={graphql`
      query {
        allContentfulBlogPost (sort: { fields: publishedDate, order: DESC}) {
          edges {
            node {
              title 
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
              heroImage {
                gatsbyImageData
                description
              }
              tag
            }
          }
        }
      }
      `}
      render={(data) => {
        return (
          <Container>
            <h1>Blog</h1>
            <BlogContainer posts={data.allContentfulBlogPost.edges} {...props} />
          </Container>
        )
      }}
    />
  }