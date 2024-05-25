import React from 'react'
import { Form } from 'react-bootstrap';
import '../../styles/CreateUser.css'

const UserForm = ({ handleInputChange, formData, errors }) => {
    return (
        <>
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
        </>
    )
}

export default UserForm
