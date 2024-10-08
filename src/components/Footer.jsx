import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 40px 0;
  text-align: center;
  margin-top: 40px;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialIcon = styled(motion.a)`
  color: var(--text-color);
  font-size: 24px;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const Copyright = styled.p`
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons>
          <SocialIcon
            href="https://twitter.com/skooltify"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTwitter />
          </SocialIcon>
          <SocialIcon
            href="https://facebook.com/skooltify"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFacebook />
          </SocialIcon>
          <SocialIcon
            href="https://instagram.com/skooltify"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram />
          </SocialIcon>
        </SocialIcons>
        <Copyright>© {new Date().getFullYear()} Skooltify. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;