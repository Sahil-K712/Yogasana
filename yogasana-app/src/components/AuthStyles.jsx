// AuthStyles.jsx - Updated styles
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AuthContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

export const AuthCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem 3rem;  // Increased horizontal padding, reduced vertical
  width: 100%;
  max-width: 480px;    // Increased max-width
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

export const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 0.5rem;  // Reduced margin
  font-size: 1.8rem;      // Slightly smaller font
`;

export const Subtitle = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 1.5rem;  // Reduced margin
  font-size: 0.9rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;  // Reduced gap
`;

export const InputGroup = styled.div`
  position: relative;
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;        // Reduced padding
  padding-left: 2.5rem;
  border: 1.5px solid #e1e1e1;
  border-radius: 10px;
  font-size: 0.9rem;      // Slightly smaller font
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);

  &:focus {
    border-color: #764ba2;
    outline: none;
    box-shadow: 0 0 0 2px rgba(118, 75, 162, 0.2);
  }
`;

export const Button = styled.button`
  padding: 0.8rem;        // Reduced padding
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;      // Slightly smaller font
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const SocialButton = styled.button`
  width: 100%;
  padding: 0.8rem;        // Reduced padding
  background: white;
  color: #333;
  border: 1.5px solid #e1e1e1;
  border-radius: 10px;
  font-size: 0.9rem;      // Slightly smaller font
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 0.5rem;  // Added margin bottom

  &:hover {
    background: #f8f8f8;
    transform: translateY(-1px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1rem 0;         // Reduced margin
  color: #666;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #e1e1e1;
  }

  span {
    padding: 0 10px;
    font-size: 0.8rem;    // Smaller font
  }
`;

export const SwitchText = styled.p`
  text-align: center;
  margin-top: 1rem;       // Reduced margin
  color: #666;
  font-size: 0.8rem;      // Smaller font

  a {
    color: #764ba2;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;