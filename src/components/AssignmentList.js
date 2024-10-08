// AssignmentList.js
import React from 'react';
import { Typography, List, ListItem, Divider } from '@mui/material';
import FeedbackForm from './FeedbackForm';

const AssignmentList = ({ assignments }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <Typography variant="h5">Assignments</Typography>
      {assignments.length === 0 ? (
        <Typography>No assignments available.</Typography>
      ) : (
        <List>
          {assignments.map((assignment, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <Typography>{assignment.title}</Typography>
              </ListItem>
              <FeedbackForm assignment={assignment} />
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}
    </div>
  );
};

export default AssignmentList;
