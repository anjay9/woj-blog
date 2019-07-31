import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(11),
    fontSize: 36,
  },
  about: {
    textAlign: 'justify',
    fontSize: 18,
    marginBottom: theme.spacing(14),
  },
  postTitle: {
    textAlign: 'left',
    fontSize: 24,
    marginTop: theme.spacing(0.2),
  },
  postDate: {
    textAlign: 'left',
    color: 'rgb(129, 129, 129)',
    fontSize: 14,
    marginBottom: theme.spacing(2),
  },
  postContent: {
    textAlign: 'left',
    color: 'rgb(129, 129, 129)',
    fontSize: 16,
  },
  footer: {
    textAlign: 'center',
    color: 'rgb(129, 129, 129)',
    marginTop: theme.spacing(12),
    fontSize: 16,
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
