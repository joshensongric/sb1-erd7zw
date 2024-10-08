import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectPlanContainer = styled.section`
  padding: 80px 0;
  background-color: #FFFFFF;
`;

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #0F4C3A;
`;

const PlanContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PlanSection = styled(motion.div)`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #0F4C3A;
`;

const SectionContent = styled.p`
  font-size: 16px;
  color: #333333;
  margin-bottom: 15px;
`;

const ProjectPlan = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ProjectPlanContainer id="project-plan">
      <Title>Project Plan for FlutterFlow Development</Title>
      <PlanContent>
        <PlanSection
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>1. Project Setup and Configuration (Week 1)</SectionTitle>
          <SectionContent>
            - Set up FlutterFlow project and configure basic settings
            - Integrate Firebase and set up Firestore database
            - Define color scheme and basic design system
            - Create reusable widgets for common UI elements
          </SectionContent>
        </PlanSection>

        <PlanSection
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionTitle>2. User Authentication and Profile (Week 2)</SectionTitle>
          <SectionContent>
            - Implement user registration and login flows
            - Create user profile creation and editing pages
            - Set up phone number verification system
            - Implement secure data storage for user information
          </SectionContent>
        </PlanSection>

        <PlanSection
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionTitle>3. School Search and Filtering (Week 3-4)</SectionTitle>
          <SectionContent>
            - Develop advanced search functionality with multiple filters
            - Implement geolocation-based school search
            - Create school listing and detail pages
            - Integrate map view for school locations
          </SectionContent>
        </PlanSection>

        <PlanSection
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SectionTitle>4. Application System (Week 5-6)</SectionTitle>
          <SectionContent>
            - Build application form with dynamic fields
            - Implement document upload functionality
            - Create application review and submission process
            - Develop application tracking system
          </SectionContent>
        </PlanSection>

        <PlanSection
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <SectionTitle>5. Notifications and Messaging (Week 7)</SectionTitle>
          <SectionContent>
            - Implement push notification system
            - Create in-app notification center
            - Develop messaging system for parent-school communication
            - Set up email notifications for important updates
          </SectionContent>
        </PlanSection>

        <PlanSection
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <SectionTitle>6. Testing and Refinement (Week 8)</SectionTitle>
          <SectionContent>
            - Conduct thorough testing of all features
            - Optimize app performance and responsiveness
            - Refine UI/UX based on user feedback
            - Prepare for app store submission
          </SectionContent>
        </PlanSection>
      </PlanContent>
    </ProjectPlanContainer>
  );
};

export default ProjectPlan;