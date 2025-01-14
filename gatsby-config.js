/* eslint-disable camelcase */
const site = require('./config/site.json');
const themeUiSvgrTemplate = require('./config/themeUiSvgrTemplate');

/** @type import('gatsby').GatsbyConfig */
module.exports = {
  siteMetadata: {
    siteUrl: site.url,
    title: site.title,
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
        name: site.title,
        short_name: site.shortName,
        start_url: `/`,
        background_color: site.backgroundColor,
        theme_color: site.themeColor,
        display: `standalone`,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,
        svgo: true,
        template: themeUiSvgrTemplate,
      },
    },
  ],
};
