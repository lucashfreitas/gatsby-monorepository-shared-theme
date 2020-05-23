import React from 'react';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import Container from '../styles/layout/container';

import AppContainer from '../containers/app';
import useAppConfigQuery from '../queries/appConfigQuery';
import BannerImage from '../components/bannerImage';

interface ContainerProps {
  children: React.ReactNode;
}

const Title = styled.h1`
  color: ${themeGet('colors.primary', 'black')};
`;

const SubTitle = styled.p`
  color: ${themeGet('colors.secondary', 'black')};
`;

const Animals: React.FC = () => {
  const appSettings = useAppConfigQuery();

  return (
    <AppContainer>
      <Title>
        Wow, this is {appSettings.name} created by the shared theme.
      </Title>

      <SubTitle>{appSettings.name} secondary color</SubTitle>
      <Container>Just testing color background</Container>
      <div>
        <p>
          Banner Image was defined in child websites but is also available here
        </p>
        <BannerImage />
      </div>
    </AppContainer>
  );
};

export default Animals;
