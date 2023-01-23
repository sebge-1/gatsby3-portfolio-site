import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Highlight from "react-highlight";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "../assets/monokai.css";
import { Container, Grid, Chip, Box, Paper } from "@mui/material";
import InfoBar from "../components/blogInforBar";
import { Link } from "gatsby";
import { slugify } from "../utils/slugify";
import SideBar from "../components/SideBar";
import PaginationController from "../components/PaginationController";
import { Divider, Typography } from "@mui/material";
import TableOfContents from "../components/TableOfContents";

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
        sm={12}
        xs={12}
        sx={{
          paddingRight: "10%",
          paddingLeft: "10%",
        }}
      >
        <Container sx={{ marginTop: "2rem" }}>
          <Typography variant="overline" color="text.secondary" component="div">
            {publishedDate}
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
            sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
          >
            {title}
          </Typography>
          <Box>
            {tag &&
              tag.map((tag, index) => {
                const slug = slugify(tag);
                return (
                  <Link to={`/blog/tags/${slug}`} key={index}>
                    <Chip
                      key={index}
                      label={tag}
                      clickable
                      sx={{
                        m: "0 0.1rem 1rem 0.1rem",
                      }}
                    />
                  </Link>
                );
              })}
          </Box>
          {tldr.internal.content && (
            <Typography gutterBottom variant="h6" component="div">
              {tldr.internal.content}
            </Typography>
          )}
          <InfoBar date={publishedDate} content={content} />

          {heroImage && (
            <GatsbyImage
              image={image}
              style={{ height: "auto" }}
              alt={description || ""}
            />
          )}

          <Box display={{ sm: "inline-block", md: "none" }}>
            <TableOfContents sections={section} />
          </Box>
          <Box>{post && renderRichText(content, options)}</Box>
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
      <Box
        display={{ sm: "none", md: "block" }}
        component={Divider}
        orientation="vertical"
        flexItem
        sx={{ mr: "-1px" }}
      />
      <Box
        component={Grid}
        item
        lg={3}
        md={3}
        display={{ xs: "none", sm: "none", md: "block" }}
      >
        <SideBar sections={section} tags={tags} location={props.location} />
      </Box>
    </Grid>
  );
};

export default BlogPost;
