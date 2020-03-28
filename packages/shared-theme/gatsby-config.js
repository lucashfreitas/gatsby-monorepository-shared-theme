//TODO: add flow type or typescript to type 'themeOptions'
//TODO: Add joi validation for themeOptions

module.exports = (themeOptions ) => {
  return {
    plugins: [
      `gatsby-plugin-typescript`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          environment: themeOptions.contentfulConfig.environment,
          spaceId: themeOptions.contentfulConfig.spaceId,
          accessToken: themeOptions.contentfulConfig.accessToken,
          downloadLocal: themeOptions.contentfulConfig.downloadLocal,
        },
      },

      
    ],
  }
}
