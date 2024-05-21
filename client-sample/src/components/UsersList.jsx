import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import UserCard from './UserCard';
import Loader from '../helper/Loader';

const UsersList = () => {
    const getAllUsersUrl = 'http://localhost:4000/v1/user/all';

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        await axios.get(`${getAllUsersUrl}`)
            .then((response) => {
                setUsers(response.data.users); // Set user state from fetched data
                setIsLoading(false); // Set isLoading to false when user is fetched
            })
            .catch((error) => {
                setError(error); // Set error state if there's an error while fetching data
                setIsLoading(false); // Set isLoading to false
            });
    }

    const renderUser = Object.values(users).map(user => {
        return <UserCard key={user.id} user={user} />
    })

    if (isLoading) {
        return (
            <Loader />
        )
    }
    if (error) {
        return (
            <div className="error-message">{error.message}</div>
        )
    }
    return (
        <>
            <Container className='mb-5 p-3' fluid>
                <h3 className='text-center'>Users</h3>
                <Row className='flex-wrap mt-4'>{renderUser}</Row>
            </Container>
        </>
    )
}
export default UsersList
