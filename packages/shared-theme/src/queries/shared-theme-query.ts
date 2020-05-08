import { graphql, useStaticQuery } from 'gatsby';

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
            variant
          }
        }
      }
    }
  `);

  return query.sitePlugin.pluginOptions;
};

export default useSharedThemeQuery;
