import React, { useRef, useEffect, useState } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import "../styles/WelcomeSection.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const WelcomeSection = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
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
    <div className="programmer-img" id="home">
      <Container className="container" >
        <Row>
          <Col>
            <div className="hi-name-text">
              <div className={`${isVisible ? 'animate-fade-in' : ''}`}
                   ref={textRef}>
                <p>Hi</p>
                <p>I'm Ali Gheshlaghi</p>
              </div>
            </div>

            <div className="welcome-text">
              <div className={`${isVisible ? 'animate-fade-in' : ''}`}
                   ref={textRef}>
                <div className="know-more-rows">
                 <div>
                    <p>Welcome to my personal website</p>
                    <p>Scroll to see more</p>
                 </div>
                 <Button variant="primary"
                         className="know-more-button"
                         size="lg"
                         href="#about">Know more</Button>
                </div>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomeSection;
