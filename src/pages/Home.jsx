// src/pages/Home.jsx
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { MoveUp } from "lucide-react";
import { fetchCountries, filterByRegion } from "../store/slices/countriesSlice";
import Navbar from "../components/Navbar";
import CountrySlider from "../components/CountrySlider";
import CountrySkeleton from "../components/CountrySkeleton";
import Footer from "../components/Footer";

const ITEMS_PER_PAGE = 8;
const SCROLL_THRESHOLD = 300;

const Home = () => {
  const dispatch = useDispatch();
  const { filteredItems, loading } = useSelector((state) => state.countries);
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (
        target.isIntersecting &&
        !loading &&
        !isLoadingMore &&
        displayCount < filteredItems.length
      ) {
        setIsLoadingMore(true);
        setTimeout(() => {
          setDisplayCount((prev) => prev + ITEMS_PER_PAGE);
          setIsLoadingMore(false);
        }, 1000);
      }
    },
    [loading, isLoadingMore, displayCount, filteredItems.length]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [handleObserver]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const displayedCountries = filteredItems.slice(0, displayCount);

  return (
    <>
      <Navbar />

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
          {loading
            ? Array(ITEMS_PER_PAGE)
                .fill()
                .map((_, index) => <CountrySkeleton key={index} />)
            : displayedCountries.map((country) => (
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
              ))}
        </Row>

        {isLoadingMore && (
          <Row>
            {Array(ITEMS_PER_PAGE)
              .fill()
              .map((_, index) => (
                <CountrySkeleton key={`loading-${index}`} />
              ))}
          </Row>
        )}

        <div ref={loader} className="text-center py-4">
          {!loading && displayCount < filteredItems.length && (
            <div className="loading-spinner" />
          )}
        </div>

        {/* Scroll to Top Button with Lucide Icon */}
        {showScrollTop && (
          <Button
            variant="primary"
            className="scroll-to-top-btn"
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 1000,
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <MoveUp size={24} />
          </Button>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
