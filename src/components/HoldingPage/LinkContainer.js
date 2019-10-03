import React from 'react'
import styled from 'styled-components'
import { useSiteMetaData } from '../../hooks/useSiteMetaData'
import { Facebook, Insta, Linked, Pin, Twitter } from '../social/Icons'

export const LinkFlex = styled.div`
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
    }
`

export const SocialContainer = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

export const PinLink = styled.a`
  @media (max-width: 480px) {
    display: none;
  }
`

export const TelLink = styled.a`
@media (max-width: 480px) {
  letter-spacing: 7.5px;
  line-height: 0;
  margin: 10px 0 20px;
  white-space: nowrap;
}
`


const LinkContainer = () => {

    const { 
        email,
        social } = useSiteMetaData()

    return (
        <LinkFlex>
            <a 
            href={`mailto:${email}`} 
            target='_blank'
            rel="noopener noreferrer"
            aria-label="Link to email">{email}</a>
            <TelLink 
            aria-label="Link to telephone"
            href='tel:+447413977023'>+27 (79) 819 8987</TelLink>
            <SocialContainer>
                <a 
                href={social.facebook} 
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Link to Facebook"><Facebook /></a>
                <a
                href={social.insta} 
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Link to Instagram"><Insta /></a>
                <a
                href={social.twitter} 
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Link to Twitter"><Twitter /></a>
                <a 
                href={social.linked} 
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Link to LinkedIn"><Linked /></a>
                <PinLink
                href={social.pin} 
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Link to Pinterest"><Pin /></PinLink>
            </SocialContainer>
        </LinkFlex>
    )
}

export default LinkContainer







