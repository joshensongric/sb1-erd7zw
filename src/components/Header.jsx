import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Logo = styled(motion.h1)`
  font-size: 24px;
  color: var(--text-color);
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(motion.a)`
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skooltify
      </Logo>
      <Nav>
        <NavLink
          href="#features"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Features
        </NavLink>
        <NavLink
          href="#roadmap"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Roadmap
        </NavLink>
        <NavLink
          href="#schema"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Schema
        </NavLink>
        <NavLink
          href="#pages"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Pages
        </NavLink>
        <NavLink
          href="#journeys"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          User Journeys
        </NavLink>
        <NavLink
          href="#designs"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Designs
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;