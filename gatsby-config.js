/**
 * 
 * 
 * Gatsby's Config APIs is implemented in this file.
 * 
 * See: https://www.gatsbyjs.org/docs/gatsby-config
 * 
 * 
 */


const path = require("path");

module.exports = {
  siteMetadata: {
    pathPrefix: '/',
    keywords: [
      'Anit Shrestha Manandhar',
      'codeanit',
      'Software Engineering',
      'Technical Articles',
      'Programming Blog',
    ],
    title: "Blog By Anit Shrestha Manandhar",
    titleAlt: 'codeanit.com',
    description:
      "Anit is a hands-on code experienced software engineer who blogs and provides software development service.",
    url: 'https://codeanit.com', // Site domain without trailing slash
    siteUrl: 'https://codeanit.com/', // url + pathPrefix
    siteLanguage: 'en', // Language Tag on <html> element
    logo: 'src/static/logo/logo.png',
    // banner: 'src/static/logo/banner.png',
    favicon: 'src/static/logo/logo.png', // Manifest favicon generation
    shortName: 'codeanit', // Shortname for manifest, must be shorter than 12 characters
    author: 'codeanit', // Author for schemaORGJSONLD
    themeColor: '#000000',
    backgroundColor: '#ffffff',
    twitter: '@codeanit', // Twitter Username
    twitterDesc:
      'Tweets by Anit Shrestha Manandhar.',
  },
  plugins: [
    'gatsby-plugin-printer',
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [{ name: 'en' }],
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'subtitle', store: true, attributes: { boost: 5 } },
          { name: 'content' },
          { name: 'slug', store: true },
          { name: 'date', store: true },
          { name: 'keywords', store: true },
        ],
        resolvers: {
          Mdx: {
            title: node => node.frontmatter.title,
            subtitle: node => node.frontmatter.subtitle,
            content: node => node.rawBody,
            date: node => node.frontmatter.date,
            slug: node => `/blog/${node.frontmatter.slug}`,
            keywords: node => node.frontmatter.keywords,
          },
        },
        filename: 'search_index.json',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog By Anit Shrestha Manandhar.`,
        short_name: `Blog By Anit`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'GTM-KWW9X8N',
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: `${site.siteMetadata.siteUrl}${
                edge.node.path === '/' ? '' : edge.node.path
              }/`,
              changefreq: `daily`,
              priority: 0.7,
            };
          }),
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/Blog.tsx'),
          posts: require.resolve('./src/templates/Blog.tsx')
        },
        remarkPlugins: [require('remark-toc')],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              backgroundColor: 'transparent',
              showCaptions: true,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-sectionize',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: `<svg style="width: 0px; height: 0px;"></svg>`,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: './src/utils/typography',
      },
    },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: path.resolve(__dirname, `src/pages`),
    //   },
    // },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-twitter',

  ],
};
