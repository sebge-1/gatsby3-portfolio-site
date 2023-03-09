import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Card, Typography, Stack, Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import { slugify } from "../utils/slugify";
import { useTheme } from "@mui/material/styles";
import Slide from "@mui/material/Slide";

const BlogList = (props) => {
  const activeTheme = useTheme();

  return (
    <Stack
      spacing={{ xs: 2, md: 3 }}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      {props.posts.map((edge, index) => {
        return (
          <Slide
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
            key={index}
          >
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
                ":hover": {
                  boxShadow: "10px 10px 5px 0px rgba(212,190,212,1)",
                },
              }}
              raised={true}
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
                        width: "150px",
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
                          <Link
                            to={
                              slug === props.activeTag
                                ? `/blog`
                                : `/blog/tags/${slug}`
                            }
                            key={index}
                          >
                            <Chip
                              key={index}
                              label={tag}
                              clickable
                              onClick={() =>
                                props.setActiveTag && props.setActiveTag(slug)
                              }
                              sx={{
                                bgcolor:
                                  props.activeTag && props.activeTag === slug
                                    ? `${activeTheme.palette.primary.main}`
                                    : "",
                                "&:hover": {
                                  bgcolor:
                                    props.activeTag && props.activeTag === slug
                                      ? `${activeTheme.palette.primary.light}`
                                      : "",
                                },
                                "& .MuiChip-label": {
                                  color:
                                    props.activeTag && props.activeTag === slug
                                      ? `white`
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
          </Slide>
        );
      })}
    </Stack>
  );
};

export default BlogList;
