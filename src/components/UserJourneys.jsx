import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const UserJourneysContainer = styled.section`
  padding: 80px 0;
  background-color: #F5F7FA;
`;

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #0F4C3A;
`;

const JourneyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Journey = styled(motion.div)`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const JourneyTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #0F4C3A;
`;

const JourneySteps = styled.ol`
  padding-left: 20px;
`;

const JourneyStep = styled.li`
  margin-bottom: 15px;
  color: #333333;
`;

const JourneyImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-top: 20px;
`;

const journeys = [
  {
    title: "New User Registration and Profile Creation",
    steps: [
      "User opens the app and views onboarding screens",
      "User taps \"Sign Up\" on the Sign Up / Login Page",
      "User enters phone number and verifies it on the Phone Verification Page",
      "User completes profile creation on the User Profile Creation Page",
      "User is directed to the Home Page"
    ],
    image: "https://example.com/user-registration-journey.jpg"
  },
  {
    title: "Searching for Schools",
    steps: [
      "User navigates to the Home Page",
      "User taps on the search bar or \"See All\" for top-rated schools",
      "User enters search criteria on the School Search Page",
      "User browses through search results",
      "User taps on a school to view the School Details Page"
    ],
    image: "https://example.com/school-search-journey.jpg"
  },
  {
    title: "Applying to a School",
    steps: [
      "User views school information on the School Details Page",
      "User taps \"Apply\" to start the application process",
      "User fills out the application form on the Application Form Page",
      "User reviews the completed application on the Application Review Page",
      "User submits the application",
      "User is redirected to the My Applications Page to view the submitted application"
    ],
    image: "https://example.com/school-application-journey.jpg"
  },
  {
    title: "Tracking Application Status",
    steps: [
      "User navigates to the My Applications Page",
      "User views the list of submitted applications and their statuses",
      "User receives notifications about application updates",
      "User checks the Notifications Page for detailed updates",
      "User views appointment details for interviews or further steps"
    ],
    image: "https://example.com/application-tracking-journey.jpg"
  }
];

const UserJourneys = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <UserJourneysContainer id="journeys">
      <Title>User Journeys</Title>
      <JourneyList>
        {journeys.map((journey, index) => (
          <Journey
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <JourneyTitle>{journey.title}</JourneyTitle>
            <JourneySteps>
              {journey.steps.map((step, stepIndex) => (
                <JourneyStep key={stepIndex}>{step}</JourneyStep>
              ))}
            </JourneySteps>
            <JourneyImage src={journey.image} alt={journey.title} />
          </Journey>
        ))}
      </JourneyList>
    </UserJourneysContainer>
  );
};

export default UserJourneys;