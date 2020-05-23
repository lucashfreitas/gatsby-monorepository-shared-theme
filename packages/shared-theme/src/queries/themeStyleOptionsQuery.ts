/*
Gatsby issue
https://github.com/AdamLeBlanc/gatsby-plugin-ts-loader/issues/1
*/

/* eslint-disable import/no-duplicates */

import { graphql } from 'gatsby';

import { useStaticQuery } from 'gatsby';

import { ThemeOptions, SharedThemeQuery } from './interfaces';

/*
We can also query plugin options in gatsby! :)
This query uses the data defined on `gatsby-config.js` through plugins `options` JSON object.
To see this access the cat or dog app gatsby-config.js.
*/

const useThemeStyleOptionsQuery = (): ThemeOptions => {
  const query: SharedThemeQuery = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@lucasfsantos/shared-theme" }) {
        pluginOptions {
          theme {
            colors {
              primary
              secondary
            }
          }
        }
      }
    }
  `);

  return query.sitePlugin.pluginOptions.theme;
};

export default useThemeStyleOptionsQuery;
