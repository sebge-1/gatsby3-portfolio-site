import React from 'react';
import { StaticQuery, graphql} from "gatsby"
import BlogList from '../components/BlogList.js'

class BlogPage extends React.Component {
  state = {
    posts: this.props.posts,
  }
  
  render(props) {
    return (
      <>
        <div style={{padding: '0 40px 40px 40px'}}>
          <h1>Blog</h1>
           <BlogList 
              posts={this.state.posts} 
            />
        </div>
      </>
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