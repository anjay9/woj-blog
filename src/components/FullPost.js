import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Text from './Text';
import { postsInfo } from './postsInfo';

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 800,
  },
  box: {
    marginTop: theme.spacing(20),
  },
  cardMedia: {
    width: '100%',
    height: 0,
    paddingTop: '56.25%',
  },
}));

export default (props) => {
  const classes = useStyles();
  const post = postsInfo[props.openedPostNumber];
  return (
    <Fragment>
      <Container className={classes.container}>
        <Card className={classes.box}>
          <CardMedia
            className={ classes.cardMedia }
            image={ post.image }
            title={ post.imageTitle }
          />
          <CardContent>
          <Text type='postDate'>
            { post.date }
          </Text>
          <Text type='postTitle'>
            { post.title }
          </Text>
          <Text type='postContent'>
            { post.content }
          </Text>
          </CardContent>
        </Card>
      </Container>
    </Fragment>
  );
}
