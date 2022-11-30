import React from 'react';
import BlogList from '../components/BlogList.js'
import { Container } from '@mui/material'

export default class BlogPage extends React.Component {
    render(props) {
      return (
        <Container>
             <BlogList 
                posts={this.props.posts} 
              />
        </Container>
      )  
    }
  }