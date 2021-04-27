import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavLink from './NavLink';
import { colors } from '../../Themes/Themes';

const useStyles = makeStyles({
  container: {
    width: '100%',
    position: 'absolute',
    margin: 'auto',
    top: 60,
  },
  logo: {
    transform: 'rotate(-90deg)',
    color: colors.black,
    width: 'fit-content',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    transform: 'rotate(-90deg)',
    width: 'fit-content',
  }
});

const DesktopBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.logo}>Simply Chocolate</div>
      <div className={classes.links}>
        <NavLink name="shop" route="/" />
        <NavLink name="csr" route="/csr" />
        <NavLink name="news" route="/news" />
        <NavLink name="about" route="/about" />
        <NavLink name="stores" route="/stores" />
        <NavLink name="contact" route="/contact" />
        <NavLink name="careers" route="/careers" />
        <NavLink name="catalogue" route="/catalogue" />
        <NavLink name="travel retail" route="/travelretail" />
        <NavLink name="cocoa horizons" route="/cocoahorizons" />
        <NavLink name="corporate solutions" route="/corporatesolutions" />
        <NavLink name="your box" />
      </div>
    </div>
  );
};

export default DesktopBar;
