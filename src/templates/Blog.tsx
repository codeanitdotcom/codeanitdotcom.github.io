import slugify from '@sindresorhus/slugify';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import { MONTHS } from '../constants';
import Layout, { LayoutChildrenProps } from '../layouts';
import Hero from '../components/Hero';
// import Flex from '../components/Flex';
import MDX from '../components/MDX';
// import ProgressBar, { TableOfContentType } from '../components/ProgressBar';
import Seo from '../components/Seo';
import sectionize from '../utils/sectionize';
import { Heading, Box } from '@primer/components'


interface BlogProps {
  pageContext: {
    frontmatter: {
      title: string;
      subtitle?: string;
      date: string;
      slug: string;
    };
    // tableOfContents?: TableOfContentType;
    timeToRead: number;
    cover: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };

  site: any;
}

const Blog: React.FC<BlogProps> = (props) => {
  const { pageContext } = props;
  const { frontmatter, cover, tableOfContents, timeToRead } = pageContext;
  const { date, slug, subtitle, title } = frontmatter;

  const childrenWithProps = sectionize(
    props.children as React.ReactElement<any>[]
  );

  const headerProps = {
    title,
    sticky: false,
    collapsableOnScroll: false,
  };

  return (
    <Layout footer={true} header={true} headerProps={headerProps}>
      {(layoutProps: LayoutChildrenProps) => {
        const { site } = layoutProps;
        const progressBarTarget = React.createRef<HTMLDivElement>();
        const parsedDate = new Date(Date.parse(date));
        const SeoBanner = `/opengraph-images/${slugify(title)}.png`;
        
        return (
          <article className="h-entry">
            <Seo
              title={`${title} - ${site.siteMetadata.title}`}
              desc={subtitle}
              article={true}
              banner={SeoBanner}
              pathname={slug + '/'}
              date={date}
            />
            <br/>
            <br/>
            <Hero id="top">
              <Heading fontSize={50} mb={1}>{title}</Heading>
              {subtitle ? <Heading fontSize={21} mb={2}>{subtitle}</Heading> : null}
              <Hero.Info>
                <Box>
                  { MONTHS[parsedDate.getMonth()] } { parsedDate.getDate() }{','} {parsedDate.getFullYear()}{' / '}{timeToRead}min read
                </Box>
              </Hero.Info>
              {cover ? (
                <Hero.Img
                  className="u-photo"
                  imgStyle={{
                    borderRadius: '4px',
                    margin: '0 auto',
                    maxHeight: '800px',
                    minHeight: '100px',
                  }}
                  fluid={cover.childImageSharp.fluid}
                />
              ) : null}
            </Hero>
            
            {/* <ProgressBar
              tableOfContents={tableOfContents}
              target={progressBarTarget}
            /> */}

            <MDX ref={progressBarTarget}>{childrenWithProps}</MDX>
            <time
              className="hidden dt-published"
              itemProp="datepublished"
              dateTime={date}
            >
              {new Date(date).toISOString().replace('Z', '') + '+01:00'}
            </time>
            <a
              className="hidden u-url"
              href={`${site.siteMetadata.url}/posts/${slug}`}
            />
            {subtitle && (
              <p className="hidden p-summary e-content">{subtitle}</p>
            )}
          </article>
        );
      }}
    </Layout>
  );
};

export default Blog;
