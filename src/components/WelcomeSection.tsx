import React, { useRef, useEffect, useState, JSX } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/WelcomeSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const WelcomeSection = (): JSX.Element => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(textRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="background-landing-page" id="/#home">
      <Container className="container">
        <Col>
          <Row className="hi-name-text">
            <div
              className={`${isVisible ? "animate-fade-in" : ""}`}
              ref={textRef}
            >
              <div className="hello-text">
                <p>
                  Hello, I'm
                  <span className="first-last-name"> Ali Gheshlaghi.</span>
                </p>
              </div>
              <p className="intro-text">
                I'm a Python Backend Development Expert.
              </p>
            </div>
          </Row>
        </Col>
        <Row>
          <Col className="welcome-text">
            <div
              className={`${isVisible ? "animate-fade-in" : ""}`}
              ref={textRef}
            >
              <div className="know-more-rows">
                <p>Welcome to my personal website</p>
                <p>Scroll to see more</p>
              </div>
            </div>
          </Col>
          <Col>
            <Button
              variant="info"
              className="know-more-button"
              size="lg"
              href="#/#about"
            >
              Know more
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomeSection;
