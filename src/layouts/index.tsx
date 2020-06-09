import { Layout } from './LandingPage';

export interface LayoutChildrenProps {
  site: {
    siteMetadata: {
      author: string;
      title: string;
      url: string;
    };
  };
}

export default Layout;
