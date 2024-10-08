// AssignmentSubmission.js
import React, { useState } from 'react';
import { TextField, Button, Card, Typography, Grid } from '@mui/material';

const AssignmentSubmission = ({ assignment }) => {
  const [submission, setSubmission] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submission for ${assignment.title}:`, submission);
    setSubmission('');
  };

  return (
    <Grid container justifyContent="center" style={{ padding: '20px' }}>
      <Card style={{ padding: '20px', maxWidth: '600px', width: '100%' }}>
        <Typography variant="h5" gutterBottom>
          Submit Assignment: {assignment.title}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Submission"
            multiline
            rows={4}
            value={submission}
            onChange={(e) => setSubmission(e.target.value)}
            fullWidth
            variant="outlined"
            required
            style={{ marginBottom: '20px' }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Card>
    </Grid>
  );
};

export default AssignmentSubmission;
