import React from 'react';
import { StaticQuery, graphql} from "gatsby"
import BlogList from '../components/BlogList.js'
import { Container } from '@mui/material'

class BlogPage extends React.Component {
  state = {
    posts: this.props.posts,
  }
  
  render(props) {
    return (
      <Container>
          <h1>Blog</h1>
           <BlogList 
              posts={this.state.posts} 
            />
      </Container>
    )  
  }
}

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
        return <BlogPage posts={data.allContentfulBlogPost.edges} {...props}/>
      }}
    />
  }