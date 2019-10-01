import React from 'react'
import styled from 'styled-components'
import texture from '../../images/texture.svg'
import { Facebook, Insta, Linked, Pin, Twitter } from '../social/Icons'

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PageContainer = styled.div`
  z-index: 3;
  padding: 4rem;
  @media (max-width: 480px) {
    width: 75%;
    padding: 0;
  }
`

export const LinkContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    @media (max-width: 991px) {
      flex-wrap: wrap;
      width: 21rem;
    }
    @media (max-width: 480px) {
      flex-direction: column;
      width: 16rem;
      &:nth-child(2) {
        letter-spacing: 10px;
      }
    }
`

export const SocialContainer = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 480px) {
    margin-top: -1.5rem;
  }
`

export const PinLink = styled.a`
  @media (max-width: 480px) {
    display: none;
  }
`

export const TelLink = styled.a`
@media (max-width: 480px) {
  letter-spacing: 6.85px;
}
`

const HoldingPage = () => {
  return (
    <Section>
      <PageContainer>
        <p className='cape'>Cape</p>
        <p className='designs'>Designs</p>
        <h1>Web Development & Graphics</h1>
        <hr />
        <p className='soon'>Launching Soon</p>
        <hr className='bottom' />
        <LinkContainer>
          <a>hi@capedesigns.co</a>
          <TelLink>+27 (79) 819 8987</TelLink>
          <SocialContainer>
            <a><Facebook /></a>
            <a><Insta /></a>
            <a><Twitter /></a>
            <a><Linked /></a>
            <PinLink><Pin /></PinLink>
          </SocialContainer>
        </LinkContainer>
      </PageContainer>
      <img src={texture} alt='background texture of table mountain' />
    </Section>
  )
}

export default HoldingPage