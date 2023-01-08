import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Card, Typography, Stack, Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import { slugify } from "../utils/slugify";

const BlogList = (props) => {
  return (
    <Stack
      spacing={{ xs: 2, md: 3 }}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      {props.posts.map((edge, index) => {
        return (
          <Card
            key={index}
            sx={{
              display: "flex",
              height: "100%",
              width: {
                lg: "70%",
                md: "85%",
                sm: "90%",
                xs: "90%",
              },
            }}
          >
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                key={index}
                sx={{ height: "100%" }}
                display={{ xs: "none", sm: "block", md: "block" }}
                component={CardMedia}
              >
                {edge.node.heroImage && (
                  <GatsbyImage
                    image={edge.node.heroImage.gatsbyImageData}
                    alt={edge.node.heroImage.description}
                    style={{
                      width: "200px",
                      height: "100%",
                    }}
                    imgStyle={{
                      objectFit: "cover",
                    }}
                  />
                )}
              </Box>
              <CardContent>
                <CardContent>
                  <Typography variant="overline" color="text.secondary">
                    {edge.node.publishedDate}
                  </Typography>
                  <Link to={`/blog/${edge.node.slug}`}>
                    <Typography gutterBottom variant="h6" component="div">
                      {edge.node.title}
                    </Typography>
                    <Box display={{ sm: "none", md: "inline-block" }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        component="div"
                      >
                        {edge.node.tldr.internal.content}
                      </Typography>
                    </Box>
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
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </Stack>
  );
};

export default BlogList;
