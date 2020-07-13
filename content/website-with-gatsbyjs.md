---

title: Website With GatsbyJS
subtitle: Building a static website with GatsbyJS 
date: '2020-06-09'
categories: ['general', 'framework', 'website']
keywords: ['website', 'blog', 'gatsby', 'javascript', 'typescript', 'jam-stack', 'static-wesite']
slug: website-with-gatsby
cover: './img/gatsbyjs-logo-banner.jpg'
type: 'BlogPost'

---

The recent trends of static websites built with [JAMStack](https://jamstack.org) is on the rise. Free hosting providers such as [Github](https://github.io) and [Netlify](https://netlify.com) has made JAMStack more attractive. 

I have choosen [GatsbyJS](https://www.gatsbyjs.org) to develop this website.


### Why Gatsby?
Gatsby is open-sourced blazing fast modern site generator with a great community. It is build on top of ReactJS with GraphQL as the data provider and uses Webpack to build Progressive Web App easily. 

![Gatsby powered by with React, GraphQL, Webpack](./img/react-graphql-webpack.png)


I love [Markdown](https://en.wikipedia.org/wiki/Markdown). Markdown is a plain text formatting syntax aimed at making writing for the internet easier. The philosophy behind Markdown is that plain text documents should be readable without tags mussing everything up, but there should still be ways to add text modifiers like lists, bold, italics, etc. It is an alternative to WYSIWYG (what you see is what you get) editors, which use rich text that later gets converted to proper HTML. And the best thing about it is that it's dead simple to learn. Gatsby provides an easier way to transform Markdown files into HTML content using [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem) plugin. 

Gatsby provides a number of good plugins to make the development faster. Some commonly used plugins are: 
- [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp) exposes several image processing functions
- [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet) provides drop-in server rendering support 

Many more can be found at https://www.gatsbyjs.org/plugins.

Furthermore, there are many open source Gatsby built websites for reference. The collection of resources can be found at https://github.com/GatsbyCheatsheet. 
 

### The Development Journey
Gatsby provides good [tutorials](https://www.gatsbyjs.org/tutorial) to get started with. It makes building website easier for the developers. One thing I felt missing was a good example which shows how to start from defining data type and mapping it to generate GraphQL nodes. This [repository](https://github.com/GatsbyCheatsheet/police-brutality-site) filled that gap a more in that context. 

Gatsby also provides a concept of theme but that seems to be a complete system rather than just user interfaces. I was looking forward to find an example site with a good reference that implements theme and built on top of TypeScript and [Maximeheckel.com](https://github.com/GatsbyCheatsheet/blog.maximeheckel.com) provided enough help. [System-ui.com](https://github.com/GatsbyCheatsheet/system-ui.com) provided insights using theme, components and CSS.


### Overall
The journey to built website on Gatsby was challenging. I learned a lot about  Gatsby and modern frontend development technologies and methodology.  I intend to make the website more useful with quality contents and functionality to add great user experience.

