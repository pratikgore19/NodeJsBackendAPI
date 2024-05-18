import React from 'react'
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

import '../styles/Home.css'

const Home = () => {
  return (
    <div>
    <div className="hero-section">
      <Container>
        <h1>Welcome to MyWebsite</h1>
        <p>Your one-stop solution for managing users.</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </Container>
    </div>

    <Container className="features-section">
      <h2 className="section-title">Features</h2>
      <Row>
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Feature One</Card.Title>
              <Card.Text>
                Description of the first feature. It offers great benefits and amazing functionalities.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Feature Two</Card.Title>
              <Card.Text>
                Description of the second feature. It enhances productivity and user satisfaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Feature Three</Card.Title>
              <Card.Text>
                Description of the third feature. It ensures security and ease of use.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <Container className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <Row>
        <Col md={6}>
          <Card className="testimonial-card">
            <Card.Body>
              <Card.Text>
                "This website has transformed the way we manage our users. It's incredibly easy to use and very efficient."
              </Card.Text>
              <footer className="blockquote-footer">Jane Doe</footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="testimonial-card">
            <Card.Body>
              <Card.Text>
                "A must-have tool for any organization. The features are fantastic and the support is top-notch."
              </Card.Text>
              <footer className="blockquote-footer">John Smith</footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Home
