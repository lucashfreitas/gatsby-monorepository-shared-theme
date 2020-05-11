import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';

/*
TODO: fix interface for global name
*/

interface SharedThemeQuery {
  theme: {
    variant: string;
  };
}

const useSharedThemeQuery = (): SharedThemeQuery => {
  const query = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@lucasfsantos/shared-theme" }) {
        pluginOptions {
          theme {
            colors {
              primary
            }
          }
        }
      }
    }
  `);

  return query.sitePlugin.pluginOptions.theme;
};

export default useSharedThemeQuery;
