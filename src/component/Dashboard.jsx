// Dashboard.js
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { auth } from '../config/firebase'; // Import Firebase authentication

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigate('/login'); // Redirect to login page after successful logout
      })
      .catch((error) => {
        console.error("Logout Error: ", error);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" component={Link} to="/dashboard/profile">
            Profile
          </Button>
          <Button color="inherit" component={Link} to="/dashboard/settings">
            Settings
          </Button>
          <Button color="inherit" component={Link} to="/dashboard/analytics">
            Analytics
          </Button>
          <Button color="inherit" component={Link} to="/dashboard/notifications">
            Notifications
          </Button>
          <Button color="inherit" component={Link} to="/dashboard/reports">
            Reports
          </Button>
          {/* Logout Button */}
          <Button color="error" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ maxWidth: 800, mx: 'auto', mt: 5 }}>
        <Outlet /> {/* This is where the nested routes will be rendered */}
      </Box>
    </Box>
  );
};

export default Dashboard;
