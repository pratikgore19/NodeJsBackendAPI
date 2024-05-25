import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

import * as userService from '../../service/userService'

const EditUser = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Initialize state for form fields
    const [userName, setUserName] = useState('');
    const [userAge, setAge] = useState(0);
    const [userEmail, setUserEmail] = useState('');
    const [userCity, setUserCity] = useState('');

    // State for validation messages
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ageError, setAgeError] = useState('');

    // Email validation function
    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const {user} = await userService.getUserById(id)
                setUserName(user.userName);
                setAge(user.userAge);
                setUserEmail(user.userEmail);
                setUserCity(user.userCity);
            } catch (err) {
                console.log('Error fetching user details');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    const handleCancel = () => {
        navigate(`/user/${id}`);
    }

    // Handle field changes and validate in real-time
    const handleNameChange = (e) => {
        setUserName(e.target.value);
        if (!e.target.value) setNameError('Name is required');
        else setNameError('');
    };

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
        if (!e.target.value) setEmailError('Email is required');
        else if (!isValidEmail(e.target.value)) setEmailError('Invalid email address');
        else setEmailError('');
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
        if (!e.target.value) setAgeError('Age is required');
        else if (isNaN(e.target.value)) setAgeError('Age must be a number');
        else setAgeError('');
    };

    const handleCityChange = (e) => {
        setUserCity(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const payLoad = {
            userName,
            userEmail,
            userAge,
            userCity
        };

        // Final validation before submission
        if (!userName) setNameError('Name is required');
        if (!userEmail) setEmailError('Email is required');
        if (!isValidEmail(userEmail)) setEmailError('Invalid email address');
        if (!userAge) setAgeError('Age is required');
        if (isNaN(userAge)) setAgeError('Age must be a number');

        if (nameError || emailError || ageError) return;

        try {
            const apiResponse = await userService.editUser(id, payLoad);
            if (apiResponse.status) {
                toast.success('User updated successfully');
                navigate(`/user/${id}`);
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

    if (loading) {
        return <div>Loading...</div>;
      }

    return (
        <Container className='mb-5' >
            <h1 className='text-center mb-5 mt-3'>Edit Profile</h1>
            <Row className='justify-content-center' >
                <Col lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='text'
                                value={userName}
                                placeholder='Tom Hughes'
                                onChange={handleNameChange}
                            />
                            {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                value={userEmail}
                                placeholder='tomhughes@gmail.com'
                                onChange={handleEmailChange}
                            />
                            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type='number'
                                value={userAge}
                                placeholder='32'
                                onChange={handleAgeChange}
                                min={18}
                                max={70}
                            />
                            {ageError && <p style={{ color: 'red' }}>{ageError}</p>}
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type='text'
                                value={userCity}
                                placeholder='New York'
                                onChange={handleCityChange}
                            />
                        </Form.Group>
                        <Col className='d-flex justify-content-center gap-1'>
                        <Button variant='primary' type='submit'>Done</Button>
                        <Button variant="danger" onClick={handleCancel}>Cancel</Button>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default EditUser
