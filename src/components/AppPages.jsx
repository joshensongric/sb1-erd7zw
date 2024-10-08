import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AppPagesContainer = styled.section`
  padding: 80px 0;
  background-color: #FFFFFF;
`;

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #0F4C3A;
`;

const PageList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const PageItem = styled(motion.div)`
  background-color: #F5F7FA;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PageTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: #0F4C3A;
`;

const PageDescription = styled.p`
  font-size: 16px;
  color: #333333;
  margin-bottom: 15px;
`;

const PageImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const pages = [
  {
    title: "Splash Screen",
    description: "The initial screen users see when opening the app. It displays the Skooltify logo and provides a smooth transition into the app experience.",
    image: "https://example.com/splash-screen.jpg"
  },
  {
    title: "Onboarding Screens",
    description: "A series of screens introducing new users to the key features of Skooltify. These screens highlight the app's benefits and guide users through the initial setup process.",
    image: "https://example.com/onboarding-screens.jpg"
  },
  {
    title: "Sign Up / Login Page",
    description: "Allows users to create a new account or log in to an existing one. It includes options for email/password authentication and social media login.",
    image: "https://example.com/signup-login-page.jpg"
  },
  {
    title: "Phone Verification Page",
    description: "Ensures user authenticity by verifying their phone number through an OTP (One-Time Password) system.",
    image: "https://example.com/phone-verification-page.jpg"
  },
  {
    title: "User Profile Creation Page",
    description: "Guides users through setting up their profile, including personal information and preferences for school searches.",
    image: "https://example.com/profile-creation-page.jpg"
  },
  {
    title: "Home Page",
    description: "The main dashboard displaying personalized school recommendations, recent searches, and quick access to key features.",
    image: "https://example.com/home-page.jpg"
  },
  {
    title: "School Search Page",
    description: "A comprehensive search interface allowing users to find schools based on various criteria such as location, ratings, and available classes.",
    image: "https://example.com/school-search-page.jpg"
  },
  {
    title: "School Details Page",
    description: "Provides in-depth information about a selected school, including facilities, curriculum, fees, and user reviews.",
    image: "https://example.com/school-details-page.jpg"
  },
  {
    title: "School Reviews Page",
    description: "Displays user-generated reviews and ratings for a specific school, helping parents make informed decisions.",
    image: "https://example.com/school-reviews-page.jpg"
  },
  {
    title: "Application Form Page",
    description: "A streamlined interface for parents to fill out and submit school applications, including all necessary information and document uploads.",
    image: "https://example.com/application-form-page.jpg"
  },
  {
    title: "Application Review Page",
    description: "Allows users to review their completed application before final submission, ensuring all information is accurate.",
    image: "https://example.com/application-review-page.jpg"
  },
  {
    title: "My Applications Page",
    description: "A centralized hub for users to track the status of all their submitted applications and receive updates.",
    image: "https://example.com/my-applications-page.jpg"
  },
  {
    title: "Notifications Page",
    description: "Keeps users informed about application updates, deadlines, and other important information related to their school search and application process.",
    image: "https://example.com/notifications-page.jpg"
  },
  {
    title: "User Profile Page",
    description: "Allows users to view and edit their personal information, preferences, and account settings.",
    image: "https://example.com/user-profile-page.jpg"
  }
];

const AppPages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AppPagesContainer id="pages">
      <Title>App Pages</Title>
      <PageList
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {pages.map((page, index) => (
          <PageItem
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PageTitle>{page.title}</PageTitle>
            <PageImage src={page.image} alt={page.title} />
            <PageDescription>{page.description}</PageDescription>
          </PageItem>
        ))}
      </PageList>
    </AppPagesContainer>
  );
};

export default AppPages;