import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Highlight from "react-highlight";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "../assets/monokai.css";
import { Container, Grid, Chip, Box } from "@mui/material";
import InfoBar from "../components/blogInforBar";
import { Link } from "gatsby";
import { slugify } from "../utils/slugify";
import SideBar from "../components/SideBar";
import PaginationController from "../components/PaginationController";
import { Divider } from "@mui/material";

const BlogPost = (props) => {
  const { tags, posts, index, pathPrefix, post } = props.pageContext;
  const { heroImage, title, content, tldr, tag, publishedDate, section } =
    post.node;

  const Text = ({ children }) => (
    <p style={{ fontSize: "1.25rem" }}>{children}</p>
  );
  const options = {
    renderMark: {
      [MARKS.CODE]: (code) => {
        return <Highlight language="javascript">{code}</Highlight>;
      },
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="anchor" id={`${slugify(node.content[0].value)}`}>
          {children}
        </h2>
      ),
    },
  };
  const image = getImage(heroImage);
  const description = heroImage.description;
  const previousUrl =
    index === 0 ? "" : `${pathPrefix}/${posts[index - 1].node.slug}`;
  const nextUrl =
    index < posts.length - 1
      ? `${pathPrefix}/${posts[index + 1].node.slug}`
      : "";

  return (
    <Grid container>
      <Grid
        item
        lg={9}
        md={9}
        sm={8}
        sx={{
          paddingRight: "10%",
          paddingLeft: "10%",
        }}
      >
        <Container>
          <h1>{title}</h1>
          {tldr.internal.content && (
            <h4>
              TLDR: <em>{tldr.internal.content}</em>
            </h4>
          )}
          {heroImage && (
            <GatsbyImage
              image={image}
              style={{ maxWidth: "70%", height: "auto" }}
              alt={description || ""}
            />
          )}
          <Box>
            {tag &&
              tag.map((tag, index) => {
                const slug = slugify(tag);
                return (
                  <Link to={`/blog/tags/${slug}`} key={index}>
                    <Chip key={index} label={tag} clickable />
                  </Link>
                );
              })}
          </Box>
          <InfoBar date={publishedDate} content={content} />
          {post && renderRichText(content, options)}
          <PaginationController
            index={index + 1}
            nextUrl={nextUrl}
            previousUrl={previousUrl}
            pathPrefix={pathPrefix}
            skipPagination={true}
            pageCount={posts.length}
          />
        </Container>
      </Grid>

      <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />

      <Grid item lg={3} md={3} sm={4}>
        <SideBar sections={section} tags={tags} location={props.location} />
      </Grid>
    </Grid>
  );
};

export default BlogPost;
