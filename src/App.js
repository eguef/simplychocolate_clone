import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    fontSize: 14,
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Hello
    </div>
  );
};

export default App;
