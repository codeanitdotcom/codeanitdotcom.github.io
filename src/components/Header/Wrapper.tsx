import React from 'react';
import { motion } from 'framer-motion';
import useScrollCounter from '../../hooks/useScrollCounter';
import styled from '../../utils/styled';
import { HeaderContext } from './Context';

const HeaderContent = styled.div`
  @media (max-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  padding-left: 70px;
  margin: 0 auto;
  height: inherit;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`;

interface StyledHeaderWrapperProps {
  slim?: boolean;
  sticky?: boolean;
  title?: string;
}


interface HeaderWrapperProps extends StyledHeaderWrapperProps {
  collapsableOnScroll?: boolean;
  collapseOffset?: number;

}
  
const HeaderWrapper = styled.div<StyledHeaderWrapperProps>`
  background: ${(props) => props.theme.backgroundColor};
  transition: ${(props) => props.theme.transitionTime}s;
  width: 100%;
  // border-top: 6px solid ${(props) => props.theme.blue};
  position: ${(props) => (props.sticky ? 'fixed' : 'inherit')};
  z-index: 999;
  ${(props) =>
    props.slim
      ? `box-shadow: ${props.theme.boxShadow}; backdrop-filter: blur(6px); opacity: 0.88;`
      : ''}
`;



export const Wrapper: React.FC<HeaderWrapperProps> = (props) => {
  const collapsed = useScrollCounter(props.collapseOffset || 150);
  const shouldCollapse = props.collapsableOnScroll ? collapsed : false;

  const memoizedContextValue = React.useMemo(
    () => ({
      collapsed: shouldCollapse,
      sticky: props.sticky || false,
      title: props.title
    }),
    [props.sticky, shouldCollapse]
  );

  return (
    <HeaderContext.Provider value={memoizedContextValue}>
      <HeaderWrapper slim={shouldCollapse} sticky={props.sticky}>
        <motion.div
          initial={{ height: 120 }}
          animate={shouldCollapse ? { height: 60 } : { height: 120 }}
          transition={{ duration: 0.4 }}
        >
          <HeaderContent>{props.children}</HeaderContent>
        </motion.div>
      </HeaderWrapper>
    </HeaderContext.Provider>
  );
};

