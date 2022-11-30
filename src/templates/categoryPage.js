import React from 'react'
import { graphql} from "gatsby";
import BlogContainer from '../components/BlogList';
import Blog from '../pages/blog';

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
            <BlogContainer posts={props.data.allContentfulBlogPost.edges}/>
        )
}

export default CategoryPage;