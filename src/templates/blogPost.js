import React from 'react'
import { graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Disqus from 'disqus-react';
import Highlight from 'react-highlight';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import "../assets/monokai.css";
import { Container } from '@mui/material';
import InfoBar from '../components/blogInforBar';
import Chip from '@mui/material/Chip';
import LabelIcon from '@mui/icons-material/Label';
import {Link} from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
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
`
const BlogPost = (props) => {
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
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    }
  }
  const image = getImage(props.data.contentfulBlogPost.heroImage)
  const description = props.data.contentfulBlogPost.heroImage.description

  return (
    <Container>
        <div>        
          <h1>{props.data.contentfulBlogPost.title}</h1>
          {props.data.contentfulBlogPost.tldr.internal.content && <h4>TLDR: <em>{props.data.contentfulBlogPost.tldr.internal.content}</em></h4>}
        </div>
          { 
            props.data.contentfulBlogPost.heroImage && 
            <GatsbyImage 
              image={image} 
              style={{ maxWidth: '70%', height: 'auto' }}
              alt={description || ""}
            />
      }
      <div>
        {props.data.contentfulBlogPost.tag && props.data.contentfulBlogPost.tag.map((tag, index) => {
          return (
            <Link to={`/blog/tags/${tag}`} key={index}>
              <Chip key={index} label={tag} clickable icon={<LabelIcon />}>
              </Chip>
            </Link>
          )
        })}
      </div>
      <InfoBar
        date={props.data.contentfulBlogPost.publishedDate}
        content={props.data.contentfulBlogPost.content}
        
      />
        <div>{props.data.contentfulBlogPost && renderRichText(props.data.contentfulBlogPost.content, options)}</div>
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </Container>
  )
}

export default BlogPost