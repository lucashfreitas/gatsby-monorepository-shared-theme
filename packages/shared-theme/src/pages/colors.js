import React from 'react';

import Container from '../styles/layout/container';

import useSharedThemeQuery from '../queries/shared-theme-query';

const Colors = () => {
  return <Container variant={useSharedThemeQuery().variant}>abc</Container>;
};

export default Colors;
