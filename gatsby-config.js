module.exports = {
  siteMetadata: {
    title: `Tooy`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-root-import',
    {
      // TODO Only for dev testing of fonts, use local font file in production
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Shrikhand`,
            file: `https://fonts.googleapis.com/css2?family=Shrikhand:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
  ],
}
