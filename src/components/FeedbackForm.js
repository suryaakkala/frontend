// FeedbackForm.js
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const FeedbackForm = ({ assignment }) => {
  const [feedback, setFeedback] = useState('');
  const [grade, setGrade] = useState('');

  const submitFeedback = (e) => {
    e.preventDefault();
    console.log(`Feedback for ${assignment.title}:`, feedback, grade);
    setFeedback('');
    setGrade('');
  };

  return (
    <form onSubmit={submitFeedback} style={{ marginTop: '10px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            fullWidth
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            fullWidth
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="secondary" fullWidth>
            Submit Feedback
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FeedbackForm;
