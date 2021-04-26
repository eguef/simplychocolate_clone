import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { string } from 'prop-types';

const useStyles = makeStyles({
  linkContainer: {

  },
  link: {

  },
  dot: {

  },
});

const NavLink = ({ name, route }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const history = useHistory();

  const onClick = () => {
    history.push(route);
  };

  const isSelected = pathname === route;

  return (
    <div className={classes.linkContainer}>
      <Link className={classes.link} onClick={onClick}>
        {name}
      </Link>
      {isSelected && <div className={classes.dot}>.</div>}
    </div>
  );
};

NavLink.propTypes = {
  name: string.isRequired,
  route: string.isRequired,
}

export default NavLink;
