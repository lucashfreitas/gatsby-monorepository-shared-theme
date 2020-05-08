import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from 'theme-ui';

interface ContainerProps {
  variant: string;
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  margin: 0;
  display: flex;
`;

const Container: React.FC<ContainerProps> = ({
  variant = 'default',
  ...props
}) => {
  const { children } = props;
  return (
    <StyledContainer
      sx={{
        variant: `container.${variant}`,
      }}
    >
      {children}
    </StyledContainer>
  );
};

type Props = {
  variant: string;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  props?: any;
  component?: any;
  autoPlay?: boolean;
  infinite?: boolean;
  isRtl?: boolean;
  customLeftArrow?: React.ReactElement;
  customRightArrow?: React.ReactElement;
  itemClass?: string;
};

Container.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  variant: 'default',
};

export default Container;
