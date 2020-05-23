import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import PropTypes from 'prop-types';
interface ContainerProps {
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  background-color: ${themeGet('colors.secondary', '#028489')};
  display: flex;
`;

const Container: React.FC<ContainerProps> = ({ ...props }) => {
  const { children } = props;
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
