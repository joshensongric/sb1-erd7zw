import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  text-align: center;
  padding: 80px 0;
`;

const Title = styled(motion.h1)`
  font-size: 48px;
  margin-bottom: 20px;
  color: var(--text-color);
`;

const Subtitle = styled(motion.p)`
  font-size: 24px;
  margin-bottom: 40px;
  color: var(--text-color);
`;

const CTAButton = styled(motion.button)`
  background-color: var(--accent-color);
  color: var(--primary-color);
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Revolutionizing School Search and Application
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Simplify your child's educational journey with Skooltify
      </Subtitle>
      <CTAButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Get Started
      </CTAButton>
    </HeroContainer>
  );
};

export default Hero;