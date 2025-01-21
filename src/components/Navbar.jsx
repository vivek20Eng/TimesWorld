// src/components/Navbar.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="custom-navbar mb-4 bg-white shadow-sm">
      <Container className=" d-flex justify-content-between align-items-center">
        <h1 className="mb-0">Countries</h1>
        <Button variant="outline-primary" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </nav>
  );
};

export default Navbar;