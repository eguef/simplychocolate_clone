import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Desktop from './DesktopBar';
import Mobile from './MobileBar';

const Topbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      {isMobile ? <Mobile /> : <Desktop />}
    </>
  );
};

export default Topbar;
