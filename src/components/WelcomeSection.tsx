import React, { useRef, useEffect, useState, JSX } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/WelcomeSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const WelcomeSection = (): JSX.Element => {
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const buttonRef = useRef(null);
  const [elementsVisible, setElementsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setElementsVisible(true);
          observer.disconnect();
        }
      });
    }, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="welcome-section-hero d-flex align-items-center justify-content-center text-center" id="/#home">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div
              ref={headingRef}
              className={`hero-content ${elementsVisible ? "is-visible" : ""}`}
            >
              <p className="hello-text">Hello, I'm</p>
              <h1 className="display-3 first-last-name mb-4">
                <span className="name-highlight">Ali Gheshlaghi</span>
              </h1>
              <p className="lead intro-text mb-5">
                I'm a <span className="expertise-highlight">Python Backend Development Expert.</span>
              </p>
              <Button
                ref={buttonRef}
                variant="primary"
                size="lg"
                href="#/#about"
                className="know-more-button animate-button"
              >
                Know More About Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomeSection;
