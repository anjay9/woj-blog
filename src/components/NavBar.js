import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import Text from './Text';

const useStyles = makeStyles({
  navBar: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#8CBEF3',
    color: 'white',
  },
  mainTitleButton: {
    userSelect: 'none',
    '&:hover': {
      cursor: 'pointer',
    }
  },
});

export default (props) => {
  const classes = useStyles();
  return (
    <div className={classes.navBar}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Container maxWidth='lg'>
            <div onClick={props.mainTitleClick} className={classes.mainTitleButton}>
              <Text type='mainTitle'>
                Wojciech Kubiak
              </Text>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
