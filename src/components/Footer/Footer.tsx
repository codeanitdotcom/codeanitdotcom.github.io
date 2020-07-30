import React from 'react'
import styled from '../../utils/styled'
import { Box, Grid, Heading } from '@primer/components'


const HR = styled.hr`
  margin-top: 30px;
`
const FooterBlock = styled.div`
  margin-top: 60px;
  background: ${(props) => props.theme.backgroundColor};
  transition: ${(props) => props.theme.transitionTime}s;
  height: 260px;
  width: 100%;
`
const FooterWrapper = styled.div`
  @media (max-width: 600px) {
    padding-left: 30px;
  }

  padding-top: 60px;
  padding-left: 75px;
  max-width: 900px;
  // margin-top: 60px;
  color: ${(props) => props.theme.fontColor};
  margin: 0 auto;
  a {
    color: inherit;
  }
`

const Footer: React.FC<{}> = () => {
  return (
    
  <FooterBlock data-testid="footer">
    <FooterWrapper>

      <Grid gridTemplateColumns="repeat(2, auto)" gridGap={0}>
        <Box p={0}>
          <Heading fontSize={33} mb={3}>I love open source</Heading>
        </Box>
        <Box p={0}><Heading fontSize={33} mb={3}>Keep in touch</Heading></Box>
        <Box p={0}> <b>codeanit.com</b> is open-sourced on <a target='_blank' href='https://github.com/codeanitdotcom/website'>GitHub</a>. <br/> Contributions and feedback are welcome!</Box>
        <Box p={0}><a target='_blank' href='https://www.linkedin.com/in/anit'>Linkedin</a> <a target='_blank' href='https://twitter.com/codeanit'>Twitter</a> <a target='_blank' href='https://github.com/codeanit'>Github</a> <a target='_blank' href='https://facebook.com/hianit'>Facebook</a></Box>
      </Grid>
      <HR />  
      <Box>Created and maintained by ©Anit Shrestha Manandhar.</Box>
      <br />
    </FooterWrapper>
  </FooterBlock>
  )
}

export { Footer }
