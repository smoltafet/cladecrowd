import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { Button, TextField, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('User logged in successfully!');
      navigate('/'); // Redirect to the landing page
    } catch (error) {
      console.error('Error logging in:', error.message);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleLogin} noValidate>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;