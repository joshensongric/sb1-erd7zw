import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import FirestoreSchema from './components/FirestoreSchema';
import AppPages from './components/AppPages';
import UserJourneys from './components/UserJourneys';
import ProjectPlan from './components/ProjectPlan';
import Footer from './components/Footer';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContentWrapper = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 40px;
  margin-top: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <ContentWrapper>
        <Features />
        <Roadmap />
        <FirestoreSchema />
        <AppPages />
        <UserJourneys />
        <ProjectPlan />
      </ContentWrapper>
      <Footer />
    </AppContainer>
  );
}

export default App;