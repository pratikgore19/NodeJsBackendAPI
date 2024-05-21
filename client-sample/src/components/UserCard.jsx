import React from 'react'
import { Col, Card } from 'react-bootstrap'

const UserCard = ({ user }) => {
    return (
        <Col className='mb-3' lg={3}>
            <Card>
                <Card.Header><p>{user.userName}</p></Card.Header>
                <Card.Body>
                    <p>Id: {user.id}</p>
                    <p>Email: {user.userEmail}</p>
                    <p>Age: {user.userAge}</p>
                    <p>City: {user.userCity}</p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserCard
