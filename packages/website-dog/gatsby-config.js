//TODO: add flow type or typescript to type 'themeOptions'
//TODO: Add joi validation for themeOptions

require('dotenv').config({
  path: `.env`,
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('./src/theme/colors');

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: '@lucasfsantos/shared-theme',
      options: {
        app: {
          name: 'DOG App',
        },
        theme: {
          colors,
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
