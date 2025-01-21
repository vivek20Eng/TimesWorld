// src/pages/Home.jsx
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { fetchCountries, filterByRegion } from '../store/slices/countriesSlice';
import { logout } from '../store/slices/authSlice';
import CountrySlider from '../components/CountrySlider';
import CountrySkeleton from '../components/CountrySkeleton';

const ITEMS_PER_PAGE = 8;

const Home = () => {
  const dispatch = useDispatch();
  const { filteredItems, loading } = useSelector((state) => state.countries);
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting && !loading && !isLoadingMore && displayCount < filteredItems.length) {
      setIsLoadingMore(true);
      setTimeout(() => {
        setDisplayCount(prev => prev + ITEMS_PER_PAGE);
        setIsLoadingMore(false);
      }, 1000);
    }
  }, [loading, isLoadingMore, displayCount, filteredItems.length]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [handleObserver]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const displayedCountries = filteredItems.slice(0, displayCount);

  return (
    <div>
      <nav className="custom-navbar mb-4">
        <Container className="py-3 d-flex justify-content-between align-items-center">
          <h1 className="mb-0">Countries</h1>
          <Button variant="outline-primary" onClick={handleLogout}>
            Logout
          </Button>
        </Container>
      </nav>

      <Container>
        {loading ? (
          <div className="skeleton-slider mb-4" style={{ height: "400px" }} />
        ) : (
          <CountrySlider countries={filteredItems.slice(0, 5)} />
        )}

        <div className="my-4">
          <Form.Select
            onChange={(e) => dispatch(filterByRegion(e.target.value))}
            className="w-auto"
          >
            <option value="all">All Regions</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </Form.Select>
        </div>

        <Row>
          {loading ? (
            Array(ITEMS_PER_PAGE).fill().map((_, index) => (
              <CountrySkeleton key={index} />
            ))
          ) : (
            displayedCountries.map((country) => (
              <Col key={country.name} xs={12} md={6} className="mb-4">
                <Card className="country-card h-100">
                  <Row className="g-0">
                    <Col xs={4}>
                      <Card.Img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="h-100 object-fit-cover"
                      />
                    </Col>
                    <Col xs={8}>
                      <Card.Body>
                        <Card.Title>{country.name}</Card.Title>
                        <Card.Text>{country.region}</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))
          )}
        </Row>

        {isLoadingMore && (
          <Row>
            {Array(ITEMS_PER_PAGE).fill().map((_, index) => (
              <CountrySkeleton key={`loading-${index}`} />
            ))}
          </Row>
        )}

        <div ref={loader} className="text-center py-4">
          {!loading && displayCount < filteredItems.length && (
            <div className="loading-spinner" />
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;