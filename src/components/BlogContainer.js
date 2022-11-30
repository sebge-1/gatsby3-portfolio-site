import React from 'react';
import BlogList from '../components/BlogList.js'

export default class BlogPage extends React.Component {
    render(props) {
      return (
             <BlogList 
                posts={this.props.posts} 
              />
      )  
    }
  }