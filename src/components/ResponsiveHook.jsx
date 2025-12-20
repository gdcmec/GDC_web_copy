'use client'

import React from 'react';

import MobileLoader from './MobileLoader/MobileLoader';
import { Nintendo } from './Nintendo/Nintendo';
import LogoGif from './LogoGif/LogoGif';
import LogoGifMob from './LogoGif/LogoGifMob';

export const Responsivehook1 = () => {
  const [width, setWidth] = React.useState(0);
  const breakpoint = 1230;

  React.useEffect(() => {
    // Set initial width
    setWidth(window.innerWidth);

    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // Show desktop version by default until width is determined
  if (width === 0) return <Nintendo />;

  // return width < breakpoint ? <MobileLoader /> : <Nintendo />;
  return width < breakpoint ? <LogoGifMob /> : <Nintendo />;
};
