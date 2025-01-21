// src/components/CountrySkeleton.jsx
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const CountrySkeleton = () => {
  return (
    <Col xs={12} md={6} className="mb-4">
      <Card className="country-card h-100">
        <Row className="g-0">
          <Col xs={4}>
            <div className="skeleton-image h-100" />
          </Col>
          <Col xs={8}>
            <Card.Body>
              <div className="skeleton-title mb-2" />
              <div className="skeleton-text" />
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default CountrySkeleton;