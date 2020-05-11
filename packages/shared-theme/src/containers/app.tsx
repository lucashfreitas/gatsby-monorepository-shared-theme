import { ThemeProvider } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash.merge';

import appTheme from '../theme/base';

import useSharedThemeQuery from '../queries/shared-theme-query';

const AppContainer: React.FC = ({ children }) => {
  const siteTheme = useSharedThemeQuery();
  const theme = merge({}, appTheme, siteTheme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
