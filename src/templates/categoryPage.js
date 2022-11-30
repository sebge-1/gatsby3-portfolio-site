import React from 'react'
import { graphql} from "gatsby";
import BlogContainer from '../components/BlogList';
import { Container } from '@mui/material';

export const query = graphql`
  query($tag: String!) {
    allContentfulBlogPost(filter: { tag: {eq: $tag}}) {
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
`

const CategoryPage = (props) => {
    return (
        <Container>
            <h1>{props.pageContext.tag}</h1>
            <BlogContainer posts={props.data.allContentfulBlogPost.edges} />
        </Container>
        )
}

export default CategoryPage;