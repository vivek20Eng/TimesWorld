// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
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

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(loginSuccess({ email }));
      navigate('/home');
    }
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

              <div className="mt-4 pt-3 border-top">
                <p className="text-center text-muted mb-2">Demo Credentials:</p>
                <div className="bg-light p-2 rounded text-center">
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