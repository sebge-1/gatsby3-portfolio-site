import React from 'react'
import { graphql} from "gatsby";
import GatsbyImage from "gatsby-plugin-image";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Disqus from 'disqus-react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Highlight from 'react-highlight';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      heroImage {
        fluid {
        ...GatsbyContentfulFluid
        }
      }
      tldr {
        internal {
          content
        }
      }
      publishedDate(formatString: "MMMM Do, YYYY")
      content {
        json
      }
    }
  } 
`
const Blog = (props) => {
  const disqusShortname = 'sebastiangertz';
  const disqusConfig = {
      url: props.data.contentfulBlogPost.slug,
      identifier: props.data.contentfulBlogPost.slug,
      title: props.data.contentfulBlogPost.title,
  };

  const Text = ({children}) => <p style={{fontSize: '1.25rem'}}>{children}</p>;
  const options = {
    renderMark: {
      [MARKS.CODE]: code => {
        return (
            <Highlight language="javascript">
              {code}
            </Highlight>
        )
      }
    },
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} style={{maxWidth: '100%',
          height: 'auto'}}/>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    }
  }

  return (
    <>
      <Head title={props.data.contentfulBlogPost.title} />
      <div style={{padding: '50px', textAlign: 'left'}}>	
        <div>        
          <h1>{props.data.contentfulBlogPost.title}</h1>
          {props.data.contentfulBlogPost.tldr.internal.content && <h4>TLDR: <em>{props.data.contentfulBlogPost.tldr.internal.content}</em></h4>}
        </div>
          { 
            props.data.contentfulBlogPost.heroImage && 
            <GatsbyImage 
              fluid={props.data.contentfulBlogPost.heroImage.fluid} 
              style={{maxWidth: '70%', height: 'auto'}}
            />
          }
        {documentToReactComponents(props.data.contentfulBlogPost.content.json, options)}
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    </>
  )
}

export default Blog