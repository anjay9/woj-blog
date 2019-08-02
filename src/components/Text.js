import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  mainTitle: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Lobster',
    [theme.breakpoints.down(600)]: {
      fontSize: 40 * 0.8,
    },
  },
  about: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(11),
    [theme.breakpoints.down(600)]: {
      fontSize: 22 * 0.8,
    },
  },


  cardTitle: {
    textAlign: 'left',
    fontSize: 24,
    marginTop: theme.spacing(0.2),
    [theme.breakpoints.down(600)]: {
      fontSize: 24 * 0.8,
    },
  },
  cardDate: {
    textAlign: 'left',
    color: 'rgb(129, 129, 129)',
    fontSize: 14,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down(600)]: {
      fontSize: 14 * 0.8,
    },
  },
  cardContent: {
    textAlign: 'left',
    color: 'rgb(129, 129, 129)',
    fontSize: 16,
    [theme.breakpoints.down(600)]: {
      fontSize: 16 * 0.8,
    },
  },


  postDate: {
    textAlign: 'right',
    fontSize: 14,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down(600)]: {
      fontSize: 14 * 0.8,
    },
  },
  postTitle: {
    textAlign: 'center',
    fontSize: 36,
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down(600)]: {
      fontSize: 36 * 0.8,
    },
  },
  postContent: {
    textAlign: 'justify',
    fontSize: 18,
    [theme.breakpoints.down(600)]: {
      fontSize: 18 * 0.8,
    },
  },


  footer: {
    textAlign: 'center',
    color: 'rgb(129, 129, 129)',
    marginTop: theme.spacing(12),
    fontSize: 16,
    [theme.breakpoints.down(600)]: {
      fontSize: 16 * 0.8,
    },
  },
}));

function Text(props) {
  const classes = useStyles();
  return (
    <Typography
      className={classes[props.type]}
    >
      {props.children}
    </Typography>
  );
}

export default Text;
