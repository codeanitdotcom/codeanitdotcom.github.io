import React from 'react';
import { graphql, Link } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import Layout from '../layouts';
import Seo from '../components/Seo';
import styled from '../utils/styled';
import SearchBox from '../components/SearchBox';

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
  query IndexPageQuery {
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
                  quality: 70
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
  let headerProps= {
    sticky: false,
    slim: true,
    collapsableOnScroll: true,
    title: 'codeanit.com'
  }

  return (
    <Layout header={true} footer={true} headerProps={headerProps}>
      {() => {
        
        return (
          <>
            <Seo />
            
            <h1 style={{ padding:'0.5em 0 0 0' }}>Technical blog by @codeanit</h1>
              
              <ShortcutList>
                <SearchBox
                  location={location}
                  showOverride={showSearch}
                  onClose={() => setShowSearch(false)}
                />
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setShowSearch(true)}
                >
                  <ShortcutIcon>Search</ShortcutIcon>
                </div>
              </ShortcutList>
              
              <h3 style={{ fontWeight: 900 }}>Articles</h3>  
              <List data-id="article-list">
                {data.allMdx.edges.map(({ node }) => {
                  let currentYear = new Date(
                    node.frontmatter.date
                  ).getFullYear();
                  let printYear;

                  if (currentYear !== year) {
                    printYear = true;
                    year = currentYear;
                  } else {
                    printYear = false;
                  }

                  return (
                    <li key={node.frontmatter.slug} data-testid="article-item">
                      {printYear ? <YearBlock>{currentYear}</YearBlock> : null}
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
          </>
        );
      }}
    </Layout>
  );
};

const ShortcutList = styled('div')`
  display: flex;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 30px;
  div {
    display: flex;
    color: #8a8a90;
    cursor: pointer;
  }
`;

const ShortcutIcon = styled('div')`
  border: 2px solid #8a8a90;
  border-radius: 5px;
  min-width: 30px;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: center;
  font-size: 12px;
}
`;

const Block = styled('div')`
  @media (max-width: 700px) {
    height: 100px;
  }

  display: flex;
  justify-content: flex-start;
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

const YearBlock = styled('div')`
  padding: 30px 15px;
  font-weight: 600;
  font-size: 18px;
`;

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
