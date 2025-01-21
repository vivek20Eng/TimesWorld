import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import { loginSuccess } from '../store/slices/authSlice';
import loginImg from '../../src/assets/login.png';

const DEMO_CREDENTIALS = {
  email: 'demo@example.com',
  password: 'Demo@123'
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasCapital = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return {
      isValid: minLength && hasCapital && hasNumber && hasSymbol,
      error: !minLength 
        ? 'Password must be at least 8 characters long'
        : !hasCapital
        ? 'Password must contain at least one capital letter'
        : !hasNumber
        ? 'Password must contain at least one number'
        : !hasSymbol
        ? 'Password must contain at least one symbol'
        : ''
    };
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else {
      const passwordValidation = validatePassword(password);
      if (!passwordValidation.isValid) {
        newErrors.password = passwordValidation.error;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
      dispatch(loginSuccess({ email }));
      navigate('/home');
      return;
    }
    
    if (validateForm()) {
      dispatch(loginSuccess({ email }));
      navigate('/home');
    }
  };

  const fillDemoCredentials = () => {
    setEmail(DEMO_CREDENTIALS.email);
    setPassword(DEMO_CREDENTIALS.password);
    setErrors({});
  };

  const handleSocialLogin = (platform) => {
    // Placeholder for social login implementation
    console.log(`Logging in with ${platform}`);
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Card className="p-4 border-0 shadow-sm" style={{ width: '100%', maxWidth: '450px' }}>
            <Card.Body>
              <h2 className="text-center mb-4">Sign In</h2>
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    Password must be at least 8 characters long with 1 capital letter, 1 number, and 1 symbol.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Keep me signed in"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Sign In
                </Button>

                <div className="text-center">
                  <p className="mb-0">New user? <a href="#" className="text-primary">Create an account</a></p>
                </div>
              </Form>

              {/* Social Login Section */}
              <div className="mt-4">
                <div className="text-center position-relative mb-4">
                  <hr className="my-2" />
                  <span className="position-absolute top-50 translate-middle bg-white px-3 text-muted" style={{ left: '50%' }}>
                    Or Sign In With
                  </span>
                </div>
                
                <div className="d-flex justify-content-center gap-3">
                  <Button 
                    variant="outline-secondary" 
                    className="social-login-btn"
                    onClick={() => handleSocialLogin('github')}
                  >
                    <Github size={20} />
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    className="social-login-btn"
                    onClick={() => handleSocialLogin('facebook')}
                  >
                    <Facebook size={20} />
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    className="social-login-btn"
                    onClick={() => handleSocialLogin('linkedin')}
                  >
                    <Linkedin size={20} />
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    className="social-login-btn"
                    onClick={() => handleSocialLogin('twitter')}
                  >
                    <Twitter size={20} />
                  </Button>
                </div>
              </div>

              <div className="mt-4 pt-3 border-top">
                <p className="text-center text-muted mb-2">Demo Credentials:</p>
                <div className="bg-light p-2 rounded text-center cursor-pointer" onClick={fillDemoCredentials}>
                  <small>Email: {DEMO_CREDENTIALS.email}</small><br />
                  <small>Password: {DEMO_CREDENTIALS.password}</small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="d-none d-md-block" style={{ background: '#f8f9fa' }}>
          <div className="h-100 d-flex align-items-center justify-content-center">
            <img
              src={loginImg}
              alt="Login img"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;