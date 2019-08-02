import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';

import PortraitImage from '../images/portrait.jpg';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(20),
  },
  portrait: {
    width: 350,
    height: 350,
    borderRadius: '100%',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down(600)]: {
      width: 350 * 0.85,
      height: 350 * 0.85,
    },
    [theme.breakpoints.down(400)]: {
      width: 350 * 0.7,
      height: 350 * 0.7,
    },
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Container maxWidth='md' className={classes.header}>
        <Box boxShadow={1} className={classes.portrait}>
          <img
            src={PortraitImage}
            alt='Portrait'
            className={classes.portrait}
          />
        </Box>
    </Container>
  );
}
