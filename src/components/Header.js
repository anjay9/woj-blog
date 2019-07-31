import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';

import Text from './Text';
import PortraitImage from '../images/portrait.jpg';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(14),
  },
  portrait: {
    width: 350,
    height: 350,
    borderRadius: '100%',
    marginBottom: theme.spacing(3),
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Container maxWidth='md' className={classes.header}>
        <Box boxShadow={2} className={classes.portrait}>
          <img src={PortraitImage} className={classes.portrait} />
        </Box>
      <Text type='header'>Wojciech Kubiak</Text>
      <Text type='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis metus et erat congue, in sagittis odio vehicula. Suspendisse velit lorem, congue at dui et, pulvinar lobortis velit. Phasellus ornare dignissim tempor. Ut ac magna dignissim, finibus tellus at, vehicula ante. Nullam dictum, ex non interdum semper, odio orci tristique mi, id gravida mauris ex nec dui. Etiam nec sem in turpis suscipit luctus in a dolor. Nunc pretium augue sed convallis tristique.</Text>
    </Container>
  );
}
