import styled from '@emotion/styled';

/** @jsx jsx */
import { jsx } from 'theme-ui';

const StyledContainer = styled.div`
  margin: 0;
  display: flex;
`;

const Container = ({ variant = 'default', ...props }) => {
  return (
    <StyledContainer
      sx={{
        variant: `container.${variant}`,
      }}
    >
      {props.children}
    </StyledContainer>
  );
};

export default Container;
