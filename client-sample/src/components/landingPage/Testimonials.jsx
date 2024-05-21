import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => {
  return (
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
  )
}

export default Testimonials
