//TODO:  add flow type or typescript to type 'themeOptions'
//TODO: Add joi validation for themeOptions

module.exports = themeOptions => {
  console.log(themeOptions);
  return {
    plugins: [
      {
        resolve: `gatsby-source-contentful`,
        options: {
          environment: themeOptions.config.contentful.environment || 'master',
          spaceId: themeOptions.config.contentful.spaceId,
          accessToken: themeOptions.config.contentful.accessToken,
          downloadLocal: themeOptions.config.contentful.downloadLocal || true
        }
      }
    ]
  };
};
