import React from 'react';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import Container from '../styles/layout/container';

import AppContainer from '../containers/app';

interface ContainerProps {
  children: React.ReactNode;
}

const Title = styled.h1`
  color: ${themeGet('colors.primary', 'black')};
`;

const SubTitle = styled.p`
  color: ${themeGet('colors.secondary', 'black')};
`;

const Colors: React.FC = () => {
  return (
    <AppContainer>
      <Title>Looks how its flexibe and powerful.</Title>
      <SubTitle>
        I can create same pages structures sharing business logics but using
        different styles. All apps will have a color page but with custom data,
        but all the hard work and business logic are done only once by the sared
        theme. Ins't amazing?
      </SubTitle>
      <Container>Just testing color background</Container>
    </AppContainer>
  );
};

export default Colors;
