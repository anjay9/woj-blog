import React, { Fragment } from 'react';

import Portrait from './Portrait';
import About from './About';
import PostsBox from './PostsBox';
import FullPost from './FullPost';

export default (props) => {
  const bodyContent = (props.openedPostNumber === 'none') ? (
    <Fragment>
      <Portrait />
      <About />
      <PostsBox cardClick={ (postNumber) => props.cardClick(postNumber) } />
    </Fragment>
  ) : (
    <FullPost openedPostNumber={ props.openedPostNumber } />
  );
  return bodyContent;
}
