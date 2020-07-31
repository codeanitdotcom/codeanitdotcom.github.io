import React from 'react';
import { Box, Heading } from '@primer/components'
import Layout from '../layouts';
import styled from '../utils/styled';
import Seo from '../components/Seo';


const AboutPage = () => {
  
  const headerProps = {};

  return (
    <Layout header={true} footer={true} headerProps={headerProps}>
      {() => {
        return (
          <MainBlock>
            <Seo />
            <br/>
            <Box>
              <Heading fontSize={57} mb={3}>About Me</Heading>
              <p>I am Anit Shrestha Manandhar from Kathmandu, Nepal. I have completed my Bachelor's in Information Management from Tribhuvan University in 2009. I have completed a certification course Diploma in Information Technology from NIIT in 2003-2004.</p>
              <p>I have been working professionally as software engineer since 2007. I have worked mostly as an object oriented backend developer. I can code proficiently in Java, C#, PHP and JavaScript and I am improving my skills in Golang and TypeScript. Although I can work with frontend frameworks like React and Angular, I do not prefer to use the “Full Stack” tag. “Frontend” and “Backend” are two different worlds which would not mix easily and are difficult to live in at the same time. I strongly believe in the “DevOps” philosophy to automate the end to end processes by removing any bottlenecks in the discovery, design, development and delivery processes that require years of experience and expertise.</p>
              <p>In such a short period, I have worked in diverse systems and I saw many kinds of code. The nature of systems varies from Wordpress to Enterprise Resource Planning applications. I have refactored and reengineered large monolithic applications and have architected distributed systems. I have written extended features and integrated external libraries in a legacy WindowsVB Desktop Application. I have designed and developed modern Cloud based Software as a Service. In this journey, I have witnessed systems being slapped with random codes, codes being stolen and murdered without mercy. On rare occasions I have admired the unintended elegance that puzzled and created sleepless search. I have learned a lot and realise that the programming language or the framework was never the part of the problem, many just did not bother to know it better and tried to hammer everything.</p>
              <p>Professional growth has never been about the languages I know, neither the frameworks I have used, nor platforms I have worked in. It’s a continuous process to learn and understand the fundamentals, to adhere to the guiding principle and design a well balanced solution that adds value to its users. No solution is perfect and this imperfection is a beauty that I am in love with which drives me to be a better software engineer.</p>
              <h2>“Any fool can know. The point is to understand.” - Albert Einstein</h2>
              <h4>“Software engineers apply engineering principles to build software and systems to solve problems. They use modeling language and other tools to devise solutions that can often be applied to problems in a general way, as opposed to merely solving for a specific instance or client. Software engineering solutions adhere to the scientific method and must work in the real world, as with bridges or elevators.” - <a target='_blank' href='https://www.ibm.com/topics/software-development'>IBM</a></h4>
              <p>I am very much thankful to the opportunities where I met with so many good people from whom I have had the privilege to learn and grow. Now I am looking forward to my next adventure, to make new friends, and to find better solutions together.</p>
            </Box>                                                                     
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
    color: ${p => p.theme.colors.gray};
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

export default AboutPage;
