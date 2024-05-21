import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'

const UserCard = ({ id, user, onButtonClick }) => {
    return (
        <Col className='mb-3' lg={3}>
            <Card onClick={() => onButtonClick(id)}>
                <Card.Header><p>{user.userName}</p></Card.Header>
                <Card.Body>
                    <p>Id: {user.id}</p>
                    <p>Email: {user.userEmail}</p>
                    <p>Age: {user.userAge}</p>
                    <p>City: {user.userCity}</p>
                    <Button variant="primary" onClick={() => onButtonClick(id)} className="mt-3">
                        View Details
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserCard
