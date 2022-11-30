import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import {Link} from 'gatsby';
import { Grid, Card, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default class BlogList extends React.Component {
  render() {
    
    return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12}}>
      {this.props.posts.map((edge, index) => {
        return (
          <Grid item xs={4} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }} key={index}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <CardMedia>
                  {edge.node.heroImage &&
                    <GatsbyImage
                    image={edge.node.heroImage.gatsbyImageData}
                    alt={edge.node.heroImage.description}
                    />}
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {edge.node.title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    {edge.node.publishedDate}
                    </Typography>
                    <Typography>
                      {edge.node.tag && edge.node.tag.map((tag, index) => {
                        return (
                          <Link to={`/blog/tags/${tag}`}>
                            <button key={index} value={tag}>
                              {tag}
                            </button>
                          </Link>
                        )
                      }
                      )}
                    </Typography>
                  </CardContent>
              </Link>
            </Card>
          </Grid>
        )
      })}
    </Grid>
    )
  }
}