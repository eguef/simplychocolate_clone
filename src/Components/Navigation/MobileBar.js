import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'fixed',
    padding: 10,
  },
});

const MobileBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>Mobile</div>
  );
};

export default MobileBar;
