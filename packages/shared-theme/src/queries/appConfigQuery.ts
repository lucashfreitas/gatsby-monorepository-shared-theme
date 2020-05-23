/*
Gatsby issue
https://github.com/AdamLeBlanc/gatsby-plugin-ts-loader/issues/1
*/

/* eslint-disable import/no-duplicates */

import { graphql } from 'gatsby';

import { useStaticQuery } from 'gatsby';

import { AppConfig, SharedThemeQuery } from './interfaces';

const useAppConfigQuery = (): AppConfig => {
  const query: SharedThemeQuery = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@lucasfsantos/shared-theme" }) {
        pluginOptions {
          app {
            name
          }
        }
      }
    }
  `);

  return query.sitePlugin.pluginOptions.app;
};

export default useAppConfigQuery;
