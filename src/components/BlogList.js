import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Grid, Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import { slugify } from "../utils/slugify";

const BlogList = (props) => {
  const path = props.location.pathname.split("/").at(-2);
  let currentlyActive = "";
  if (props.tags) {
    currentlyActive = props.tags.filter(
      (tag) => slugify(tag.tagName) === slugify(decodeURI(path))
    );
  }
  const [activeTag, setActiveTag] = useState(
    currentlyActive ? currentlyActive[0].tagName : ""
  );

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {props.posts.map((edge, index) => {
        return (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 400 }} key={index}>
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
                {edge.node.tag &&
                  edge.node.tag.map((tag, index) => {
                    return (
                      <Link to={`/blog/tags/${tag}`} key={index}>
                        <Chip
                          key={index}
                          label={tag}
                          clickable
                          onClick={() => setActiveTag(tag)}
                          sx={{
                            bgcolor:
                              activeTag && activeTag === tag ? "#9E9EFF" : "",
                            "&:hover": {
                              bgcolor:
                                activeTag && activeTag === tag ? "#b8b8ff" : "",
                            },
                          }}
                        />
                      </Link>
                    );
                  })}
              </CardContent>
              <CardContent>
                <Link to={`/blog/${edge.node.slug}`}>
                  <Typography gutterBottom variant="h4" component="div">
                    {edge.node.title}
                  </Typography>
                </Link>
                <Typography variant="h6" color="text.secondary">
                  {edge.node.publishedDate}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BlogList;
