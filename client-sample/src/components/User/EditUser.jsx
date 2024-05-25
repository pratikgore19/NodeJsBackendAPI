import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

import * as userService from '../../service/userService'
import UserForm from './UserForm';

const EditUser = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: '',
        userAge: 0,
        userEmail: '',
        userCity: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { user } = await userService.getUserById(id)
                setFormData((prevState) => {
                    return {
                        ...prevState,
                        userName: user.userName,
                        userAge: user.userAge,
                        userEmail: user.userEmail,
                        userCity: user.userCity
                    }
                })
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

    // Handle field changes
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
            const apiResponse = await userService.editUser(id, formData);
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
                    <UserForm handleInputChange={handleInputChange} formData={formData} errors={errors} />
                        <Col className='d-flex justify-content-center gap-1'>
                            <Button variant='success' type='submit'>Done</Button>
                            <Button variant="danger" onClick={handleCancel}>Cancel</Button>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default EditUser
