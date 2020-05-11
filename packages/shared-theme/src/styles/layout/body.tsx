import styled from 'styled-components';
import React from 'react';

import PropTypes from 'prop-types';

const StyledBody = styled.body`
  box-sizing: border-box;
  display: flex;
`;

interface BodyProps {
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = (props) => {
  const { children } = props;

  return <StyledBody>{children}</StyledBody>;
};

export default Body;

Body.propTypes = {
  children: PropTypes.node.isRequired,
};
