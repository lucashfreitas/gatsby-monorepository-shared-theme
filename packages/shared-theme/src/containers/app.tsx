import { ThemeProvider } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash.merge';

import appTheme from '../theme/base';

import useThemeStyleOptionsQuery from '../queries/themeStyleOptionsQuery';

const AppContainer: React.FC = ({ children }) => {
  const siteTheme = useThemeStyleOptionsQuery();

  const theme = merge({}, appTheme, siteTheme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
