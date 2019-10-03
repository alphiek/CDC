import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

export const PageContainer = styled(animated.div)`
  position: relative;
  z-index: 3;
  padding: 4rem;
  text-align: left;
  @media (max-width: 480px) {
    padding: 0;
    width: 71%;
  }
`

const FadeIn = ({ children }) => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 })
    return (
        <PageContainer style={props}>
            {children}
        </PageContainer>
    )
}

export default FadeIn