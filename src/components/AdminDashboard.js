// AdminDashboard.js
import React, { useState } from 'react';
import { TextField, Button, Card, Typography, Grid } from '@mui/material';
import AssignmentList from './AssignmentList';

const AdminDashboard = () => {
  const [assignments, setAssignments] = useState([]);

  const addAssignment = (e) => {
    e.preventDefault();
    const newAssignment = e.target.assignment.value;
    setAssignments([...assignments, { title: newAssignment, submissions: [] }]);
    e.target.assignment.value = '';
  };

  return (
    <Grid container justifyContent="center" style={{ padding: '20px' }}>
      <Card style={{ padding: '20px', maxWidth: '600px', width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Teacher Dashboard
        </Typography>
        <form onSubmit={addAssignment}>
          <TextField
            label="New Assignment"
            variant="outlined"
            name="assignment"
            fullWidth
            required
            style={{ marginBottom: '20px' }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Assignment
          </Button>
        </form>
        <AssignmentList assignments={assignments} />
      </Card>
    </Grid>
  );
};

export default AdminDashboard;
