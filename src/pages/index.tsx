import React from 'react';
import { graphql, Link } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { Flex, Box, Heading, Avatar } from '@primer/components'
import { MegaphoneIcon } from "@primer/octicons-react";

import Layout from '../layouts';
import Seo from '../components/Seo';
import styled from '../utils/styled';
// import SearchBox from '../components/SearchBox';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

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
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1050
                  maxHeight: 900
                  quality: 100
                  cropFocus: ENTROPY
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
  const [showSearch, setShowSearch] = React.useState(location.search !== '');
  let year = 0;
  const headerProps = {};

  return (
    <Layout header={true} footer={true} headerProps={headerProps}>
      {() => {
        
        return (
          <MainBlock>
            <Seo />
            <Box>
              <Heading>Hello, World!</Heading>
              <br/>
              <Heading>I am Anit Shrestha Manandhar.</Heading>
              <br/>
              <p>
                I am an experienced software engineer who has mostly worked in the backend development.
                Connect with me at <a target='_blank' href='https://www.linkedin.com/in/anit'> Linkedin</a> or <a target='_blank' href='https://twitter.com/codeanit'>Twitter</a>. 
              </p>
            </Box> 
            <p><MegaphoneIcon size={24} /> This website is still in progress and opensourced at <a  href='https://github.com/codeanit-website/website'>Github</a></p>
            
            <Heading>Articles</Heading>  
            <List data-id="article-list">
              {data.allMdx.edges.map(({ node }) => {
                return (
                  
                  <li key={node.frontmatter.slug}>
                    <Link
                      style={{ textDecoration: `none` }}
                      to={`/posts/${node.frontmatter.slug}`}
                    >
                      <Block data-testid="article-link">
                        <DateBlock>
                          {`${
                            MONTHS[new Date(node.frontmatter.date).getMonth()]
                          } ${new Date(node.frontmatter.date).getDate()}`}
                        </DateBlock>
                        <TitleBlock>{node.frontmatter.title}</TitleBlock>
                      </Block>
                    </Link>
                  </li>
                );
              })}
            </List>                                                                   
          </MainBlock>
        );
      }}
    </Layout>
  );
};

const MainBlock = styled('div')`
  @media (max-width: 600px) {
    padding-left: 15px;
  }

  padding-left: 76px;
`;

const Block = styled('div')`
  @media (max-width: 600px) {
    height: 100px;
  }
  align-items: center;
  padding-left: 15px;
  border-radius: 2px;

  height: 60px;
  box-shadow: none;

  color: ${p => p.theme.fontColor};
  transition ${p => p.theme.transitionTime / 4}s;

  div:first-of-type {
    margin-right: 40px;
  }

  &:hover {
    background-color: ${p => p.theme.foregroundColor};
    box-shadow: ${p => p.theme.boxShadow};
    color: ${p => p.theme.blue};
  }
`;

// const YearBlock = styled('div')`
//   padding: 30px 15px;
//   font-weight: 600;
//   font-size: 18px;
// `;

const DateBlock = styled('div')`
  font-size: 14px;
  font-weight: 500;
  color: #8a8a90;
  min-width: 50px;
`;

const TitleBlock = styled('div')`
  font-weight: 500;
  transition ${p => p.theme.transitionTime / 2}s;
`;

const List = styled('ul')`
  margin-left: -10px;

  li {
    list-style: none;
  }

  h3 {
    color: ${p => p.theme.fontColor};
    margin-bottom: 10px;
  }
`;

export default IndexPage;
