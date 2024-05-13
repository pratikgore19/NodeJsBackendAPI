import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'
import UserCard from './UserCard';

const ReadUsers = () => {
    const getAllUsersUrl = 'http://localhost:4000/v1/user/all';

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await axios.get(`${getAllUsersUrl}`)
            const { users } = res.data
            setUsers(users);
            if(users.length === 0) {
                setLoading(true)
            }
        } catch (error) {
            console.log(error);
            setLoading(true)
        };
    }

    const renderUser = Object.values(users).map(user => {
        return <UserCard key={user.id} user={user} />
    })
    return (
        <>
            {loading ? <div>No User Found...</div> : <><h3 className='text-center'>Users</h3>
            <Row className='d-flex flex-row flex-wrap'>
                    {renderUser}
            </Row></>}

        </>
    )
}
export default ReadUsers
