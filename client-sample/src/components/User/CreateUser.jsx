import React, { useState } from 'react'
import '../../styles/CreateUser.css'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify'

import * as userService from '../../service/userService'

const CreateUser = () => {
    const [formData, setFormData] = useState({
        userName: '',
        userAge: 0,
        userEmail: '',
        userCity: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.userName) newErrors.name = 'Name is required.';
        if (!formData.userAge) newErrors.age = 'Age is required.';
        if (!formData.userEmail) newErrors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(formData.userEmail)) newErrors.email = 'Email address is invalid.';

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const apiResponse = await userService.createUser(formData);
            if (apiResponse.status) {
                toast.success('User Successfully Created')

                // Reset form fields to their initial values
                setFormData({
                    userName: '',
                    userAge: 0,
                    userEmail: '',
                    userCity: ''
                })

                // Clear validation messages
                setErrors({});
            }
            else {
                toast.warn('Something went wrong while filling data');
            }
        }
        catch (error) {
            toast.error('An error occured while submitting data to backend');
            console.log(error);
        }
    }

    return (
        <Container className='mb-5' >
            <h1 className='text-center mb-5 mt-3'>Create Profile</h1>
            <Row className='justify-content-center' >
                <Col lg={6}>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='text'
                                name='userName'
                                value={formData.userName}
                                placeholder='Tom Hughes'
                                onChange={handleInputChange}
                            />
                            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                name='userEmail'
                                value={formData.userEmail}
                                placeholder='tomhughes@gmail.com'
                                onChange={handleInputChange}
                            />
                            {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type='number'
                                name='userAge'
                                value={formData.userAge}
                                placeholder='32'
                                onChange={handleInputChange}
                                min={18}
                                max={70}
                            />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type='text'
                                name='userCity'
                                value={formData.userCity}
                                placeholder='New York'
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Button variant='primary' type='submit'>Add Profile</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateUser
