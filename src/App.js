import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Container, Button } from '@mui/material';
import AdminDashboard from './components/AdminDashboard';
import AssignmentSubmission from './components/AssignmentSubmission';
import GradeView from './components/GradeView';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  const [assignments, setAssignments] = useState([
    { title: 'JFSD Assignment 1', submissions: [], feedback: 'good', grade: '10' },
    { title: 'PFSD Assignment 1', submissions: [], feedback: 'good', grade: '10' },
    { title: 'MSWD Assignment 1', submissions: [], feedback: 'improve', grade: '9' }
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Home page with buttons */}
          <Route
            path="/"
            element={
              <div
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Container
                  style={{
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '20px',
                    borderRadius: '10px',
                  }}
                >
                  <h1>Assignment Submission & Grading System</h1>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link} // Use Link from react-router to navigate
                    to="/admin"
                    style={{ margin: '10px' }}
                  >
                    Admin
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/student"
                    style={{ margin: '10px' }}
                  >
                    Student
                  </Button>
                </Container>
              </div>
            }
          />

          {/* Admin (Teacher) Dashboard Route */}
          <Route
            path="/admin"
            element={
              <AdminDashboard assignments={assignments} setAssignments={setAssignments} />
            }
          />

          {/* Student Dashboard Route */}
          <Route
            path="/student"
            element={
              <div>
                <AssignmentSubmission assignment={assignments[0]} />
                <GradeView assignments={assignments} />
              </div>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
