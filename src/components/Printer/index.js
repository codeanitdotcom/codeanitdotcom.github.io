import React from 'react';
import styled from '@emotion/styled';

const Matrix = () => (
  <svg
    width="878"
    height="402"
    viewBox="0 0 878 402"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.61902 242.59L876.479 238.357"
      stroke="#8A8A90"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="0.1 50"
    />
    <path
      d="M1.61902 321.513L876.479 317.28"
      stroke="#8A8A90"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="0.1 50"
    />
    <path
      d="M1.61902 400.436L876.479 396.202"
      stroke="#8A8A90"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="0.1 50"
    />
    <path
      d="M1.61902 5.82227L876.479 1.58895"
      stroke="#8A8A90"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="0.1 50"
    />
    <path
      d="M1.61902 84.7451L876.479 80.5118"
      stroke="#8A8A90"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="0.1 50"
    />
    <path
      d="M1.61902 163.667L876.479 159.434"
      stroke="#8A8A90"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="0.1 50"
    />
  </svg>
);


const LogoWrapper = styled('div')`
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
        props => "FFFFF"};
    }
  }
`;

const Logo = ({ height, width }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={ width } height={ height }><path fill="FFFFFF" fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>
);

const Wrapper = styled('div')`
  width: 1200px;
  height: 690px;
  position: relative;
  color: black;
  font-family: 'Helvetica', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:10px;

  & > svg {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const TitleWrapper = styled('div')`
  margin-top: 10px;
  width: 800px;

  h1 {
    min-height: 60px;
    max-height: 60px;
    font-weight: 600;
    font-size: 42px;
    line-height: 3px;
  }

  h2 {
    font-weight: bold;
    font-size: 30px;
    line-height: 15px;
  }

  p {
    margin-top: 5px;
    min-height: 21px;
    max-height: 21px;
    font-weight: bold;
    font-size: 21px;
  }
`;

const PrinterComponent = ( ogData ) => (
  <Wrapper>
    <Matrix/>
    <TitleWrapper>
    <Logo height='150' width='150' />
    <h2>{ ogData.subtitle }</h2>
    <h1>{ ogData.title }</h1>
    <p>Blog by Anit Shrestha Manandhar</p>
    <p>codeanit.com/blog/{ogData.slug}</p>
    </TitleWrapper>
  </Wrapper>
);

export default PrinterComponent;
