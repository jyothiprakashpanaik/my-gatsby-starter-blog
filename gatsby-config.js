

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-scource-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      },
    },

    {
      resolve: `gatsby-scource-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      },
    },

    {
      resolve: `gatsby-scource-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      },
    },
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extension: [`.md`,`.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth:1200,
            }
          }
        ]
      }
    }
  ],
}
