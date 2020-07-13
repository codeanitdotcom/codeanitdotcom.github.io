import React from 'react';
import styled from '../../utils/styled';

interface ILogoProp {
  alt: string;
  inverted?: boolean;
  size: number;
}

type LogoWrapperProps = {
  inverted?: boolean;
  size: number;
};

const LogoWrapper = styled('div') <LogoWrapperProps>`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  transition: ${props => props.theme.transitionTime}s;
  & > * {
    transition: ${props => props.theme.transitionTime}s;
  }
  svg {
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    path {
      fill: ${ 
        props => props.inverted ? props.theme.fontColor
          : props.theme.backgroundColor };
    }
  }
`;

const Logo: React.FC<ILogoProp> = ({ alt, inverted, size }) => (
<LogoWrapper inverted={inverted || true} size={size || 50}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>
</LogoWrapper>
);

export default Logo;
