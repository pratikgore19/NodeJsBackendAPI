import axios from 'axios';
import React, { useState } from 'react'
import '../styles/CreateUser.css'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const CreateUser = () => {
    const createUserEndpoint = 'http://localhost:4000/v1/user';

    const [userName, setUserName] = useState('');
    const [userAge, setAge] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userCity, setUserCity] = useState('');
    const [error, setError] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();

        const payLoad = {
            userName,
            userEmail,
            userAge,
            userCity
        };

        try {
            const res = await axios.post(createUserEndpoint,payLoad);
            if(res?.data.status.OK) {

                setUserName('');
                setAge('');
                setUserEmail('');
                setUserCity('');
            }
            else {
                
            }
        }
        catch(error) {
            setError(error);
        }
    }

    if (error) {
        return (
            <div className="error-message">{error.message}</div>
        )
    }

    return (
        <Container className='mb-5' >
            <h1 className='text-center mb-5 mt-3'>Create User</h1>
            <Row className='justify-content-center' >
                <Col lg={6}>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type='text'
                            placeholder='Tom Hughes'
                            onChange={(e)=> setUserName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            type='email'
                            placeholder='tomhughes@gmail.com'
                            onChange={(e)=> setUserEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                            type='number'
                            placeholder='32'
                            onChange={(e)=> setAge(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                            type='text'
                            placeholder='New York'
                            onChange={(e)=> setUserCity(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant='primary' type='submit' onClick={onSubmit}>Add User</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateUser
