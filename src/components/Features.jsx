import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaClipboardList, FaUserCircle, FaBell, FaComments } from 'react-icons/fa';

const FeaturesContainer = styled.section`
  padding: 80px 0;
`;

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: var(--primary-color);
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const FeatureCard = styled(motion.div)`
  background-color: var(--primary-color);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 48px;
  color: var(--accent-color);
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--text-color);
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: var(--text-color);
`;

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FaSearch />,
      title: "Advanced School Search",
      description: "Find the perfect school with our powerful search and filter options."
    },
    {
      icon: <FaClipboardList />,
      title: "Streamlined Applications",
      description: "Apply to multiple schools with ease using our intuitive application process."
    },
    {
      icon: <FaUserCircle />,
      title: "Personalized Profiles",
      description: "Create and manage detailed profiles for parents and students."
    },
    {
      icon: <FaBell />,
      title: "Smart Notifications",
      description: "Stay updated with real-time alerts on application status and deadlines."
    },
    {
      icon: <FaComments />,
      title: "Direct Communication",
      description: "Connect with school administrators through our in-app messaging system."
    }
  ];

  return (
    <FeaturesContainer id="features" ref={ref}>
      <Title>Key Features</Title>
      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </FeaturesContainer>
  );
};

export default Features;