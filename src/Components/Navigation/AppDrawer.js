import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from './TopBar';

const useStyles = makeStyles({
  root: {
    fontSize: 14,
    fontFamily: 'social-gothic'
  }
});

const AppDrawer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route path="/csr">
            <div>Because we care</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default AppDrawer;
