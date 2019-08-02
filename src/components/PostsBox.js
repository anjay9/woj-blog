import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Text from './Text';
import { postsInfo } from './postsInfo';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  cardMedia: {
    width: '100%',
    height: 0,
    paddingTop: '56.25%',
  },
});

export default props => {
  const classes = useStyles();
  const cards = postsInfo.map((post, index) =>
    <Grid item xs={12} sm={6} lg={4} key={index}>
      <Card>
        <CardActionArea onClick={ () => props.cardClick(index) }>
          <CardMedia
            className={classes.cardMedia}
            image={ post.image }
            title={ post.imageTitle }
          />
          <CardContent>
            <Text type='cardTitle'>
              { post.title }
            </Text>
            <Text type='cardDate'>
              { post.date }
            </Text>
            <Text type='cardContent'>
              { post.summary }
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
  );
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={4}>
        { cards }
      </Grid>
    </Container>
  );
}
