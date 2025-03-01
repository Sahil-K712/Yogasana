import React, { useState } from 'react';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { GiMeditation } from 'react-icons/gi';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

import {
  AuthContainer,
  AuthCard,
  Form,
  Input,
  Button,
  Title,
  Subtitle,
  SwitchText,
  Divider,
  SocialButton,
  InputGroup
} from './AuthStyles';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <AuthContainer>
      <AuthCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GiMeditation
          size={50}
          style={{
            margin: '0 auto',
            display: 'block',
            color: '#764ba2'
          }}
        />
        <Title>Create Account</Title>
        <Subtitle>Join our wellness community today</Subtitle>

        <SocialButton onClick={handleGoogleSignup}>
          <FcGoogle size={20} />
          Sign up with Google
        </SocialButton>



        <Divider><span>or sign up with email</span></Divider>

        {error && (
          <div style={{
            color: '#ff3333',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'rgba(255, 51, 51, 0.1)',
            padding: '10px',
            borderRadius: '8px'
          }}>
            {error}
          </div>
        )}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <FiMail />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <FiLock />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <FiLock />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </InputGroup>

          <Button type="submit" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </Form>

        <SwitchText>
          Already have an account? <Link to="/login">Sign In</Link>
        </SwitchText>
      </AuthCard>
    </AuthContainer>
  );
};

export default Signup;