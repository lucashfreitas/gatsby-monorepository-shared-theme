import styled from '@emotion/styled';
import React from 'react';
/** @jsx jsx */
import { jsx } from 'theme-ui';

const StyledBody = styled.body`
  box-sizing: border-box;
  display: flex;
`;

const Body = (props) => <StyledBody>{props.children}</StyledBody>;

export default Body;
