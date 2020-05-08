//TODO: add flow type or typescript to type 'themeOptions'
//TODO: Add joi validation for themeOptions

require('dotenv').config({
  path: `.env`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: '@lucasfsantos/shared-theme',
      options: {
        theme: {
          variant: 'greenApp',
        },
        config: {
          contentful: {
            environment: process.env.CONTENTFUL_ENVIRONMENT,
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            downloadLocal: true,
          },
        },
      },
    },
  ],
};
