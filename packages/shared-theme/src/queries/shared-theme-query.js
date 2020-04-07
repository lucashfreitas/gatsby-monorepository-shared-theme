import { graphql, useStaticQuery } from 'gatsby';

const useSharedThemeQuery = () => {
  const query = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@lucasfsantos/shared-theme" }) {
        pluginOptions {
          theme {
            variant
          }
        }
      }
    }
  `);

  return query.sitePlugin.pluginOptions.theme;
};

export default useSharedThemeQuery;
