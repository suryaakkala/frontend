// GradeView.js
import React from 'react';
import { Typography, List, ListItem, Divider, Card } from '@mui/material';

const GradeView = ({ assignments }) => {
  return (
    <Card style={{ padding: '20px', maxWidth: '600px', margin: '20px auto' }}>
      <Typography variant="h5" gutterBottom>
        Your Grades
      </Typography>
      <List>
        {assignments.map((assignment, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <Typography>{assignment.title} - Grade: {assignment.grade || 'Pending'}</Typography>
              <Typography style={{ marginLeft: 'auto' }}>
                Feedback: {assignment.feedback || 'No feedback yet'}
              </Typography>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
};

export default GradeView;
