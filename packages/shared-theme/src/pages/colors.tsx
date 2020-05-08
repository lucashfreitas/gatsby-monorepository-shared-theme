import React from 'react';

import Container from '../styles/layout/container';

import useSharedThemeQuery from '../queries/shared-theme-query';

const Colors: React.FC = () => {
  return (
    <Container variant={useSharedThemeQuery().theme.variant}>abc</Container>
  );
};

export default Colors;
