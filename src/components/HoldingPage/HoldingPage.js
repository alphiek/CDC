import React from 'react'
import styled from 'styled-components'
import FadeIn from '../Animations/FadeIn'
import texture from '../../images/texture.svg'
import penguin from '../../images/penguin.svg'
import LinkContainer from './LinkContainer'


export const PenguinContainer = styled.img`
  position: static;
  height: 8rem;
  width: auto;
  margin-right: 6rem;
  margin-bottom: -1.1rem;
  @media (max-width: 991px) {
    margin-bottom: -0.6rem;
    margin-right: 2rem;
  }
  @media (max-width: 480px) {
    position: absolute;
    top: -44px;
    left: 165px;
    height: 7rem;
  }
`

export const BackgroundImage = styled.img`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 0;
  opacity: 0.8;
  object-fit: cover;
  object-position: 50% 50%;
}
`

export const TopWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 480px) {
    width: 100%;
  }
`

const HoldingPage = () => {
  return (
    <section>
      <FadeIn>
        <TopWrapper>
          <p className='cape'>Cape</p>
          <PenguinContainer src={penguin} alt='Image of a jackass penguin' />
        </TopWrapper>
        <p className='designs'>Designs</p>
        <h1>Web Development & Graphics</h1>
        <hr />
        <p className='soon'>Launching Soon</p>
        <hr className='bottom' />
        <LinkContainer />
      </FadeIn>
      <BackgroundImage src={texture} alt='background texture of a mountain' />
    </section>
  )
}

export default HoldingPage