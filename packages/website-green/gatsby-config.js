//TODO: add flow type or typescript to type 'themeOptions'
//TODO: Add joi validation for themeOptions

module.exports = {
  plugins: [
    {

    resolve: '@lucasfsantos/shared-theme',
    options: {
      config: {
        contentfulConfig: {
          environment: process.env.CONTENTFUL_ENVIRONMENT,
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          downloadLocal: true,

        }
      }
      
    }
  }

    
  ],
}

