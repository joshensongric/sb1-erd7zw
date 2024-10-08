import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RoadmapContainer = styled.section`
  padding: 80px 0;
`;

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: var(--primary-color);
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: var(--primary-color);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;

  ${props => props.position === 'left' ? 'left: 0;' : 'left: 50%;'}

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: ${props => props.position === 'left' ? '-17px' : 'auto'};
    left: ${props => props.position === 'left' ? 'auto' : '-17px'};
    background-color: white;
    border: 4px solid var(--primary-color);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
`;

const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TimelineTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--primary-color);
`;

const TimelineDescription = styled.p`
  font-size: 16px;
`;

const roadmapData = [
  {
    title: 'Project Setup',
    description: 'Set up project environment and Firebase integration',
    position: 'left'
  },
  {
    title: 'Core Features',
    description: 'Implement user authentication, profile creation, and school search',
    position: 'right'
  },
  {
    title: 'Application System',
    description: 'Develop application form and tracking system',
    position: 'left'
  },
  {
    title: 'Advanced Features',
    description: 'Build messaging system and implement school ratings',
    position: 'right'
  },
  {
    title: 'Final Testing',
    description: 'Conduct thorough testing and prepare for app store submission',
    position: 'left'
  }
];

const RoadmapItem = ({ title, description, position }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <TimelineItem
      ref={ref}
      position={position}
      initial={{ opacity: 0, x: position === 'left' ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <TimelineContent>
        <TimelineTitle>{title}</TimelineTitle>
        <TimelineDescription>{description}</TimelineDescription>
      </TimelineContent>
    </TimelineItem>
  );
};

const Roadmap = () => {
  return (
    <RoadmapContainer id="roadmap">
      <Title>Development Roadmap</Title>
      <Timeline>
        {roadmapData.map((item, index) => (
          <RoadmapItem key={index} {...item} />
        ))}
      </Timeline>
    </RoadmapContainer>
  );
};

export default Roadmap;