import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'fixed',
    padding: 10,
  },
});

const DesktopBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className="">Simply Chocolate</div>
      <div className=""></div>
    </div>
  );
};

export default DesktopBar;
