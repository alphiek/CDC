import React from "react"
import { PageContainer, Section, LinkContainer, SocialContainer, PinLink } from '../components/HoldingPage/HoldingPage'
import texture404 from '../images/texture404.svg'
import { Facebook, Insta, Linked, Pin, Twitter } from '../components/social/Icons'



const NotFoundPage = () => (
  <Section>
    <PageContainer>
      <p className='cape'>Cape</p>
      <p className='designs'>Designs</p>
      <h1>Web Development & Graphics</h1>
      <hr />
      <a className='notFound'>404 Click here</a>
      <hr className='bottom' />
      <LinkContainer>
        <a>hi@capedesigns.co</a>
        <a>+27 (79) 819 8987</a>
        <SocialContainer>
          <a><Facebook /></a>
          <a><Insta /></a>
          <a><Twitter /></a>
          <a><Linked /></a>
          <PinLink><Pin /></PinLink>
        </SocialContainer>
      </LinkContainer>
    </PageContainer>
    <img src={texture404} alt='background texture of table mountain' />
  </Section>
)

export default NotFoundPage
