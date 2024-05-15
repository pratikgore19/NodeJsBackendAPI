import React from 'react'
import '../styles/Loader.css'
import { Container } from 'react-bootstrap'

const Loader = () => {
    return (
        <Container fluid className="loading-screen-container">
            <div className="loading-spinner">
                <div className="spinner"></div>
            </div>
        </Container>
    )
}

export default Loader
