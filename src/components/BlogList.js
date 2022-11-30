import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import {Link} from 'gatsby';
import { Grid, Card, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import LabelIcon from '@mui/icons-material/Label';

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
                </Link>
                <CardContent>
                    {edge.node.tag && edge.node.tag.map((tag, index) => {
                      return (
                       
                          <Link to={`/blog/tags/${tag}`} key={index}>
                          <Chip key={index} label={tag} clickable icon={<LabelIcon/>}>
                            </Chip>
                          </Link>          
                      )
                    }
                )}
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
        )
      })}
    </Grid>
    )
  }
}