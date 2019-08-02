import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';

import NavBar from './NavBar';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedPostNumber: 'none',
    };
    this.mainTitleClick = this.mainTitleClick.bind(this);
  }
  mainTitleClick() {
    window.scrollTo(0, 0);
    this.setState({ openedPostNumber: 'none' });
  }
  cardClick(postNumber) {
    window.scrollTo(0, 0);
    this.setState({ openedPostNumber: postNumber });
  }
  render (){
    const { openedPostNumber } = this.state;
    return (
      <Fragment>
        <CssBaseline />

        <NavBar
          mainTitleClick={ this.mainTitleClick }
        />
        <Body
          openedPostNumber={ openedPostNumber }
          cardClick={ (postNumber) => this.cardClick(postNumber) }
        />
        <Footer />

      </Fragment>
    );
  }
}

export default App;
