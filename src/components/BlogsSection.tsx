import React from "react";
import { Container, ListGroup, Col, Row, Nav } from "react-bootstrap";
import "../styles/BlogsSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogsSection = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="container-blogs" id="blogs">
      <div>
        <Container className="p-4">
          <Row>
            <h1 className="header-blogs">Recent Blogs</h1>
          </Row>

          <Row>
            <Col md={6}>
              <ListGroup>
                <ListGroup.Item>
                  <h4 className="blogs-title">Soccer Bet Telegram Bot</h4>
                  <Nav.Link
                    role="link"
                    className="nav-btn"
                    onClick={() =>
                      openInNewTab("https://t.me/alligator_signal")
                    }
                  >
                    <h6 className="blogs-title">Telegram</h6>
                  </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4 className="blogs-title">Remitobit Exchange</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4 className="blogs-title">
                    Analytic Back-Test Dashboard Using Dash-Plotly
                  </h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4 className="blogs-title">Cryptocurrency Screener</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="#blog3" className="nav-btn-custom">
                    Blog3
                  </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="#blog4" className="nav-btn-custom">
                    Blog4
                  </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="#blog5" className="nav-btn-custom">
                    Blog5
                  </Nav.Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={6}>
              <ListGroup>
                <ListGroup.Item>
                  <h4 className="blogs-title">
                    Alligator Indicator Signal Telegram Bot
                  </h4>
                  <Nav.Link
                    role="link"
                    className="nav-btn-custom"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/aligheshlaghi97/alligator-telegram-bot"
                      )
                    }
                  >
                    <h6 className="blogs-title">Github</h6>
                  </Nav.Link>
                  <Nav.Link
                    role="link"
                    className="nav-btn"
                    onClick={() =>
                      openInNewTab("https://t.me/alligator_signal")
                    }
                  >
                    <h6 className="blogs-title">Telegram</h6>
                  </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4 className="blogs-title">
                    Alligator Back-Tests Using Backtesting.py Library
                  </h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4 className="blogs-title">
                    Alerting Signal Using Ichimoku Indicator with Python/MQL4
                  </h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="#blog3" className="nav-btn-custom">
                    Blog3
                  </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="#blog4" className="nav-btn-custom">
                    Blog4
                  </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="#blog5" className="nav-btn-custom">
                    Blog5
                  </Nav.Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BlogsSection;
