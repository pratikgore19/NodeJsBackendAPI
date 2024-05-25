import React from 'react'
import { Col, Card, Button, Row } from 'react-bootstrap'

const UserCard = ({ id, user, viewDetails, handleDelete }) => {

    return (
        <Col className='mb-3' lg={3}>
            <Card>
                <Card.Header><p class="fs-4 text-uppercase fst-italic">{user.userName}</p></Card.Header>
                <Card.Body>
                    <Row className='d-flex'>
                        <Col md={3} className='text-start'>
                            <div class="fw-bold">
                                <p>Id:</p>
                                <p>Email:</p>
                                <p>Age:</p>
                                <p>City:</p>
                            </div>
                        </Col>
                        <Col className='text-start'>
                            <div className="fst-italic">
                                <p>{user.id}</p>
                                <p>{user.userEmail}</p>
                                <p>{user.userAge}</p>
                                <p>{user.userCity}</p>
                            </div>
                        </Col>
                    </Row>
                    <Col className='d-flex justify-content-center gap-1'>
                        <Button variant="primary" onClick={() => viewDetails(id)} className="mt-3">
                            View Details
                        </Button>
                        <Button variant="danger" className='mt-3' onClick={() => handleDelete(id)} >Delete</Button>
                    </Col>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserCard
