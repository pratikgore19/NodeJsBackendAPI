import React from 'react'
import { Container, Button } from 'react-bootstrap';

import '../../styles/Home.css'
import Testimonials from './Testimonials';
import Features from './Features';

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

    <Features />

    <Testimonials />
  </div>
  )
}

export default Home
