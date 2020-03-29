//TODO: add flow type or typescript to type 'themeOptions'
//TODO: Add joi validation for themeOptions

require('dotenv').config({
  path: `.env`
});

module.exports = {
  plugins: [
    {
      resolve: '@lucasfsantos/shared-theme',
      options: {
        config: {
          contentful: {
            environment: process.env.CONTENTFUL_ENVIRONMENT,
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            downloadLocal: true
          }
        }
      }
    }
  ]
};
