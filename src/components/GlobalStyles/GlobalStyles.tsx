import { css, Global } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import React from 'react';

const GlobalStyles: React.FC<{}> = withTheme((props) => (
  <Global
    styles={css`
      ::selection {
        background: ${props.theme.fontColor};
        color: ${props.theme.backgroundColor};
      }

      body {
        background: ${props.theme.backgroundColor};
      }

      a {
        color: ${props.theme.colors.blue};
        text-decoration: underline;
      }

      .hidden {
        display: none;
      }

      .codeanit-light {
        --codeanit-colors-brand: #5184f9;
        --codeanit-colors-body-0: #FFF;
        --codeanit-colors-body-1: rgba(217, 230, 247, 0.55);
        --codeanit-colors-body-2: rgba(236, 236, 236, 0.8);
        --codeanit-colors-typeface-0: #2b2d3e;
      }

      .codeanit-dark {
        --codeanit-colors-brand: #5184f9;
        --codeanit-colors-body-0: #1b1e21;
        --codeanit-colors-body-1: rgba(9, 14, 21, 0.6);
        --codeanit-colors-body-2: rgba(0, 0, 0, 0.4);
        --codeanit-colors-typeface-0: #ffffff;
      }

      .lock-scroll {
        overflow: hidden !important;
      }

      .isCurrent {
        a {
          color: ${props.theme.white} !important;
        }
      }
    `}
  />
));

export { GlobalStyles };
