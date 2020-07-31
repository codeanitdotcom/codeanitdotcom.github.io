import React from 'react';
import { graphql, Link } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { Box, Heading, Grid, Avatar } from '@primer/components'
import Layout from '../layouts';
import Seo from '../components/Seo';
import styled from '../utils/styled';
// import SearchBox from '../components/SearchBox';
import { useTheme } from '../context/ThemeContext';


export const pageQuery = graphql`
  query IndexAPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            slug
            title
            subtitle
            date
          }
        }
      }
    }
  }
`;

interface Props {
  data: {
    allMdx: {
      edges: Array<{
        node: {
          id: string;
          frontmatter: {
            slug: string;
            title: string;
            subtitle: string;
            date: string;
            tags: string[];
            cover: {
              childImageSharp: {
                fluid: FluidObject;
              };
            };
          };
          timeToRead: number;
        };
      }>;
    };
  };
  location: {
    search?: string;
  };
}


const IndexPage = ({ data, location }: Props) => {
  // const [showSearch, setShowSearch] = React.useState(location.search !== '');
  const headerProps = {};
  const theme = useTheme();
  
  return (
    <Layout header={true} footer={true} headerProps={headerProps}>
      {() => {
        
        return (
          <MainBlock>
            <Seo />
            <br/>
            <Heading fontSize={33} mb={6}>Hello, World!</Heading>
            <Heading fontSize={57} mb={6}>
              <Link style={{ textDecoration: `none`, color: theme.dark ? `white` : `black`}} to={`/about`}>I am Anit Shrestha Manandhar.</Link>
            </Heading>
            <Heading fontSize={24} mb={6}>10+ Years Experienced Hands-on Code Software Engineer.</Heading>
            <Heading fontSize={18} mb={12}>I provide software development services.</Heading>
            <br/>
            <br/>
            <br/>
            {/* Blog */}
            <Heading fontSize={57} mb={1}>Latest Blogs</Heading>
            <List data-id="article-list">
              <Grid gridTemplateColumns="repeat(2, auto)" gridGap={1  }>
              {data.allMdx.edges.map(({ node }) => {
                return (
                  <Box p={1}>
                    <li key={node.frontmatter.slug}>
                      <Link style={{ textDecoration: `none`, color: theme.dark ? `white` : `black`}} to={`/blog/${node.frontmatter.slug}`}>
                        <Heading fontSize={4} mb={0}>{node.frontmatter.title}</Heading>
                      </Link>
                      <Heading fontSize={1} mb={0}>{node.frontmatter.subtitle}</Heading>
                      <Heading fontSize={0} mb={-3}>{node.timeToRead}min read</Heading>
                    </li>
                </Box>
                );
              })}
              </Grid>
            </List>                                                       
          </MainBlock>
        )
      }}
    </Layout>
  )
}

const MainBlock = styled('div')`
  @media (max-width: 600px) {
    padding-left: 15px;
  }

  padding-left: 76px;
`;


const List = styled('ul')`
  margin-left: -3px;
  li {
    list-style: none;
  }
`;

export default IndexPage;
