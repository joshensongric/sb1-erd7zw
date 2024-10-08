import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SchemaContainer = styled.section`
  padding: 80px 0;
`;

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: var(--primary-color);
`;

const SchemaTable = styled(motion.table)`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
`;

const TableHeader = styled.th`
  background-color: var(--primary-color);
  color: white;
  padding: 12px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  color: #333333; // Dark grey color for better readability
`;

const FirestoreSchema = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const collections = [
    {
      name: "Users",
      fields: [
        { name: "userId", type: "String", description: "Unique identifier (Document ID)" },
        { name: "firstName", type: "String", description: "User's first name" },
        { name: "lastName", type: "String", description: "User's last name" },
        { name: "email", type: "String", description: "User's email address" },
        { name: "phone", type: "String", description: "User's phone number" },
        { name: "address", type: "String", description: "User's residential address" },
        { name: "profilePicUrl", type: "String", description: "URL to profile picture" },
        { name: "createdAt", type: "Timestamp", description: "Account creation date" },
        { name: "updatedAt", type: "Timestamp", description: "Last profile update date" },
      ],
    },
    {
      name: "Schools",
      fields: [
        { name: "schoolId", type: "String", description: "Unique identifier (Document ID)" },
        { name: "name", type: "String", description: "School name" },
        { name: "address", type: "String", description: "School address" },
        { name: "location", type: "GeoPoint", description: "Geographical coordinates" },
        { name: "description", type: "String", description: "School description" },
        { name: "rating", type: "Number", description: "Overall school rating" },
        { name: "reviewCount", type: "Number", description: "Number of reviews" },
        { name: "classes", type: "Array<String>", description: "Available classes" },
        { name: "fees", type: "Map<String, Number>", description: "Class fees" },
        { name: "openingHours", type: "Map<String, String>", description: "Operating hours" },
        { name: "contactEmail", type: "String", description: "School's contact email" },
        { name: "contactPhone", type: "String", description: "School's contact number" },
        { name: "createdAt", type: "Timestamp", description: "School profile creation date" },
        { name: "updatedAt", type: "Timestamp", description: "Last profile update date" },
      ],
    },
    {
      name: "Applications",
      fields: [
        { name: "applicationId", type: "String", description: "Unique identifier (Document ID)" },
        { name: "userId", type: "String", description: "Applicant's user ID" },
        { name: "schoolId", type: "String", description: "School's ID" },
        { name: "childName", type: "String", description: "Child's full name" },
        { name: "childDOB", type: "Timestamp", description: "Child's date of birth" },
        { name: "appliedClass", type: "String", description: "Class applied for" },
        { name: "status", type: "String", description: "Application status" },
        { name: "submittedAt", type: "Timestamp", description: "Submission date" },
        { name: "updatedAt", type: "Timestamp", description: "Last status update date" },
      ],
    },
    {
      name: "Notifications",
      fields: [
        { name: "notificationId", type: "String", description: "Unique identifier (Document ID)" },
        { name: "userId", type: "String", description: "Recipient's user ID" },
        { name: "title", type: "String", description: "Notification title" },
        { name: "body", type: "String", description: "Notification content" },
        { name: "type", type: "String", description: "Notification type" },
        { name: "createdAt", type: "Timestamp", description: "Creation date" },
        { name: "read", type: "Boolean", description: "Read status" },
      ],
    },
  ];

  return (
    <SchemaContainer id="schema" ref={ref}>
      <Title>Firestore Schema</Title>
      {collections.map((collection, index) => (
        <SchemaTable
          key={collection.name}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <thead>
            <tr>
              <TableHeader colSpan="3">{collection.name} Collection</TableHeader>
            </tr>
            <tr>
              <TableHeader>Field</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader>Description</TableHeader>
            </tr>
          </thead>
          <tbody>
            {collection.fields.map((field) => (
              <TableRow key={field.name}>
                <TableCell>{field.name}</TableCell>
                <TableCell>{field.type}</TableCell>
                <TableCell>{field.description}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </SchemaTable>
      ))}
    </SchemaContainer>
  );
};

export default FirestoreSchema;