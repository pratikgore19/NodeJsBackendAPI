import React, { useState } from 'react'
import '../../styles/CreateUser.css'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify'

import * as userService from '../../service/userService'
import UserForm from './UserForm';

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

                // Reset error messages
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
                        <UserForm handleInputChange={handleInputChange} formData={formData} errors={errors} />
                        <Button variant='primary' type='submit'>Add Profile</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateUser
