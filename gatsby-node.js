/**
 * 
 * 
 * Gatsby's Node APIs is implemented in this file.
 * 
 * See: https://www.gatsbyjs.org/docs/node-apis
 * 
 * 
 */

const path = require(`path`)
const slugify = require(`@sindresorhus/slugify`)
const { runScreenshots } = require(`gatsby-plugin-printer`);
const { exit } = require("process");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  return await graphql(
    `{
        allMdx {
          edges {
            node {
              id
              tableOfContents
              timeToRead
              frontmatter { 
                slug
                title
                subtitle
                date
                type
                keywords
                cover {
                  childImageSharp {
                    fluid(
                      maxWidth: 1500
                      maxHeight: 700
                      quality: 100
                      cropFocus: ENTROPY
                    ) {
                      base64
                      tracedSVG
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                      originalImg
                      originalName
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
              }
              parent {
                ... on File {
                  sourceInstanceName
                  absolutePath
                  relativePath
                  name
                }
              }
            }
          }
        }
      }
    `
  ).then( result => {
    
    if (result.errors) {
      reject(result.errors);
    }

    // Create blog posts pages.
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.frontmatter.slug}`,
        component: node.parent.absolutePath,
        context: {
          absPath: node.parent.absolutePath,
          timeToRead: node.timeToRead,
          cover: node.frontmatter.cover,
          tableOfContents: node.tableOfContents,
        },
      })
    })
  })
}

// exports.onCreateWebpackConfig({ actions }) {
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         '@mdx-js/react': _resolve('./node_modules/@mdx-js/react'),
//         react: _resolve('./node_modules/react'),
//         'react-dom': _resolve('./node_modules/react-dom'),
//       },
//     },
//   })
// }

exports.onPostBuild = async({ graphql }) => {
  const data = await graphql(`
    query loadPagesQuery ($limit: Int) {
      allMdx(limit: $limit) {
        edges {
          node {
            frontmatter {
              slug
                title
                subtitle
                date
                type
                keywords
                cover {
                  childImageSharp {
                    fluid(
                      maxWidth: 1500
                      maxHeight: 700
                      quality: 100
                      cropFocus: ENTROPY
                    ) {
                      base64
                      tracedSVG
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                      originalImg
                      originalName
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
            }
          }
        }
      }
    }
  `, { }).then(r => {
    if (r.errors) {
      // eslint-disable-next-line no-console
      console.error(r.errors.join(`, `))
    }
    return r.data
  });

  const ogData = data.allMdx.edges.map(
    ({
      node: {
        frontmatter: { 
          slug,
          title,
          subtitle,
          date,
          type,
          keywords,
          cover 
        },
      },
    }) => (
      {
      id: slug,
      slug,
      title,
      subtitle,
      date,
      type,
      keywords,
      cover 
      }
    )
  )

  await runScreenshots({
    data: ogData,
    component: require.resolve('./src/components/Printer/index.js'),
    outputDir: 'opengraph-images',
  })
}

// export function onCreateNode({ node, actions, getNode }) {
//   // create printer nodes only on MDX nodes that are blogposts
//   if (
//     node.internal.type === 'Mdx' &&
//     node.fileAbsolutePath.includes('/content/')
//   ) {
//     // get the folder name (ex: /blog/2019-11-04-github-actions-changelog-workflow/index.md -> 2019-11-04-github-actions-changelog-workflow)
//     let filePathSplit = node.fileAbsolutePath.split('/')
//     let fileName = filePathSplit[filePathSplit.length - 2]
//     createPrinterNode({
//       id: node.id,
//       fileName, // the filename of the image to be generated
//       outputDir: 'og-images/blog', // relative to the 'public' folder.
//       data: {
//         // The data you wish to pass down to the react component to be rendered
//         title: node.frontmatter.title,
//         date: moment(node.frontmatter.date).format('MMM, Do, YYYY'),
//       },
//       component: require.resolve('./src/components/Printer/index.js'), // the react component to be used.
//     })
//     // create a field to be then used later on for usage
//     actions.createNodeField({
//       node,
//       name: 'ogFileName',
//       value: fileName,
//     })
//   }
// }