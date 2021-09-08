import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaTwitter, FaVk, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SosialMedia, SosialMediaWrap, SosialLogo, WebsiteRights, SosialIcons, SosialIconLink  } from './FooterElements.js'


const Footer = () => {

   const toggleHome = () => {
      scroll.scrollToTop()
   }

   return (
      <FooterContainer>
         <FooterWrap>
            <FooterLinksContainer>
               <FooterLinksWrapper>
                  <FooterLinkItems>
                     <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/">Financial Services</FooterLink>
                        <FooterLink to="/">Configurator</FooterLink>
                        <FooterLink to="/">Enquire</FooterLink>
                        <FooterLink to="/">Dealers</FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                     <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/">Contact</FooterLink>
                        <FooterLink to="/">Support</FooterLink>
                        <FooterLink to="/">Destinations</FooterLink>
                        <FooterLink to="/">Sponsorships</FooterLink>
                  </FooterLinkItems>
               </FooterLinksWrapper>
               <FooterLinksWrapper>
                  <FooterLinkItems>
                     <FooterLinkTitle>Media center</FooterLinkTitle>
                        <FooterLink to="/">Submit Video</FooterLink>
                        <FooterLink to="/">Ambasadors</FooterLink>
                        <FooterLink to="/">Agency</FooterLink>
                        <FooterLink to="/">Influencer</FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                     <FooterLinkTitle>Sosial Media</FooterLinkTitle>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Youtube</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                  </FooterLinkItems>
               </FooterLinksWrapper>
            </FooterLinksContainer>
            <SosialMedia>
               <SosialMediaWrap>
                  <SosialLogo to='/' onClick={toggleHome}>
                     LUXIOR
                  </SosialLogo>
                  <WebsiteRights>LUXIOR © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                  <SosialIcons>
                     <SosialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                     </SosialIconLink>
                     <SosialIconLink href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                     </SosialIconLink>
                     <SosialIconLink  href="https://www.youtube.com/" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                     </SosialIconLink>
                     <SosialIconLink href="https://twitter.com/" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                     </SosialIconLink>
                     <SosialIconLink href="https://www.vk.com/" target="_blank" aria-label="Vkontante">
                        <FaVk />
                     </SosialIconLink>
                  </SosialIcons>
               </SosialMediaWrap>
            </SosialMedia>
         </FooterWrap>
      </FooterContainer>
   )
}

export default Footer
