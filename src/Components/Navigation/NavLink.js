import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { string } from 'prop-types';
import { colors } from '../../Themes/Themes';

const useStyles = makeStyles({
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  link: {
    color: colors.black,
    marginRight: 2,
  },
  dot: {
    color: colors.black,
  },
});

const NavLink = ({ name, route }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const history = useHistory();

  const onClick = () => {
    if (route) history.push(route);
  };

  const isSelected = route && (pathname === route);

  return (
    <div className={classes.linkContainer}>
      <Link className={classes.link} onClick={onClick} underline="always">
        {name}
      </Link>
      {isSelected && <div className={classes.dot}>.</div>}
    </div>
  );
};

NavLink.propTypes = {
  name: string.isRequired,
  route: string,
}

NavLink.defaultProps = {
  route: null,
}

export default NavLink;
