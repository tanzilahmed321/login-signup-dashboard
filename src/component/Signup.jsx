// Signup.js
import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // If user is already logged in, redirect to dashboard
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/dashboard');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      navigate('/login'); // After signup, go to login page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Signup
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSignup}>
        <TextField
          label="Name"
          type="name"
          fullWidth
          margin="normal"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Signup
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
