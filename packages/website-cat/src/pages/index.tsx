import React from 'react';

import { themeGet } from '@styled-system/theme-get';
import { Link } from 'gatsby';
import { AppContainer } from '@lucasfsantos/shared-theme';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${themeGet('colors.primary', 'black')};
`;

const Paragraph = styled.p`
  color: ${themeGet('colors.primary', 'black')};
`;

const Cat: React.FC = () => (
  <AppContainer>
    <Title>This is the cats App</Title>
    <Paragraph>Look how it cool:</Paragraph>
    <Paragraph>
      We can define our own style and use it here at the main web application
      and also use it in shared/common pages created by our shared theme.
    </Paragraph>
    <Paragraph>
      We can import elements defined in our shared theme and modify style
      through plugin options or even create configurable props and use them
      here, at the app level.
    </Paragraph>
    <Paragraph>
      Note that even the contex injection was done by the shared theme and can
      be used here from <strong>@lucasfsantos/shared-theme</strong>. We can uso
      import graphQLQueries from the plugin, components and everything else.
    </Paragraph>
    Check below a page created by the shared theme!
    <Link to="/animals">access animals page created by shared plugin</Link>
  </AppContainer>
);

export default Cat;
