import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';

import Header from './Header';
import PostBox from './PostBox';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
}));

function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Container>
        <Header />
        <PostBox />
        <Footer />
      </Container>
    </Fragment>
  );
}

export default App;
