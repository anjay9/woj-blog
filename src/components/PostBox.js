import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Text from './Text';
import PostImage from '../images/post.jpg';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    width: '100%',
    height: 0,
    paddingTop: '56.25%',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>

      <Grid item xs={12} sm={6} lg={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={PostImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Text type='postTitle'>
                Lizard
              </Text>
              <Text type='postDate'>
              14 July 2019
              </Text>
              <Text type='postContent'>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Text>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} lg={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={PostImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Text type='postTitle'>
                Lizard
              </Text>
              <Text type='postDate'>
              14 July 2019
              </Text>
              <Text type='postContent'>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Text>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} lg={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={PostImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Text type='postTitle'>
                Lizard
              </Text>
              <Text type='postDate'>
              14 July 2019
              </Text>
              <Text type='postContent'>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Text>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>
      </Grid>

    </Grid>
  );
}
