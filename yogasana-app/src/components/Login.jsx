import React, { useState } from 'react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { GiMeditation } from 'react-icons/gi';
import { FiMail, FiLock } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';  // Google icon



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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
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
        <Title>Welcome Back</Title>
        <Subtitle>Continue your wellness journey with us</Subtitle>

        <SocialButton onClick={handleGoogleLogin}>
          <FcGoogle size={20} />
          Continue with Google
        </SocialButton>



        <Divider><span>or continue with email</span></Divider>

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

          <div style={{
            textAlign: 'right',
            marginTop: '-0.5rem',
            marginBottom: '0.5rem'
          }}>
            <Link to="/forgot-password" style={{
              color: '#764ba2',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>
              Forgot password?
            </Link>
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? 'Please wait...' : 'Sign In'}
          </Button>
        </Form>

        <SwitchText>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </SwitchText>
      </AuthCard>
    </AuthContainer>
  );
};

export default Login;