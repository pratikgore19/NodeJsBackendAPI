import React from 'react'
import { Col, Card } from 'react-bootstrap'

const UserCard = ({ user }) => {
    return (
        <Col className='mb-3' lg={3}>
            <Card>
                <Card.Header><p>{user.name}</p></Card.Header>
                <Card.Body>
                    <p>Id: {user.id}</p>
                    <p>Email: {user.email}</p>
                    <p>Age: {user.age}</p>
                    <p>City: {user.city}</p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserCard
