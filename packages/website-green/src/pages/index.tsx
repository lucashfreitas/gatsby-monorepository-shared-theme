import React from 'react';

import { AppContainer } from '@lucasfsantos/shared-theme';
import { themeGet } from '@styled-system/theme-get';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${themeGet('colors.primary', 'black')};
`;

const Description = styled.p`
  color: ${themeGet('colors.primary', 'black')};
`;

const Green: React.FC = () => (
  <AppContainer>
    <Title>This is the green App</Title>
    <Description>
      Looks how it cool, we can define our own style and use it for custom pages
      at our main website and also define it in shared/common pages created by
      our shared theme. Check below a page created by our shared theme
    </Description>
    <Link to="/colors">access shared colors page</Link>
  </AppContainer>
);

export default Green;
