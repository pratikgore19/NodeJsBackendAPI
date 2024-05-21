import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const Features = () => {
  return (
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
  )
}

export default Features
