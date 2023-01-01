import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Grid, Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import { slugify } from "../utils/slugify";
import { Container } from "@mui/material";

const BlogList = (props) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {props.posts.map((edge, index) => {
        return (
          <Grid item sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", maxWidth: "345px" }} key={index}>
              <Link to={`/blog/${edge.node.slug}`}>
                <CardMedia>
                  {edge.node.heroImage && (
                    <GatsbyImage
                      image={edge.node.heroImage.gatsbyImageData}
                      alt={edge.node.heroImage.description}
                    />
                  )}
                </CardMedia>
              </Link>
              <CardContent>
                <Typography variant="overline" color="text.secondary">
                  {edge.node.publishedDate}
                </Typography>
                <Link to={`/blog/${edge.node.slug}`}>
                  <Typography gutterBottom variant="h6" component="div">
                    {edge.node.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {edge.node.tldr.internal.content}
                  </Typography>
                </Link>
              </CardContent>

              <CardContent>
                {edge.node.tag &&
                  edge.node.tag.map((tag, index) => {
                    const slug = slugify(tag);
                    return (
                      <Link to={`/blog/tags/${slug}`} key={index}>
                        <Chip
                          key={index}
                          label={tag}
                          clickable
                          onClick={() => props.setActiveTag(slug)}
                          sx={{
                            bgcolor:
                              props.activeTag && props.activeTag === slug
                                ? "#9E9EFF"
                                : "",
                            "&:hover": {
                              bgcolor:
                                props.activeTag && props.activeTag === slug
                                  ? "#b8b8ff"
                                  : "",
                            },
                            mr: "5px",
                          }}
                        />
                      </Link>
                    );
                  })}
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BlogList;
