import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

import '../../styles/UserDetails.css'

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getUserByIdEndpointUrl = `http://localhost:4000/v1/user/${id}`
  const deleteUserByIdEndpointUrl = `http://localhost:4000/v1/user/delete/${id}`;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${getUserByIdEndpointUrl}`);
        setUser(response.data.user);
      } catch (err) {
        setError('Error fetching user details');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleUpdate = () => {

  }

  const handleDelete = async () => {
      try {
        const response = await axios.delete(`${deleteUserByIdEndpointUrl}`);
        console.log(response);
        navigate("/all-users");
      } catch (err) {
        setError('Error deleting user');
      } finally {
        setLoading(false);
      }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <Container className="mt-2">
      <Row>
        <Col md={8} className="mx-auto">
          <h1>User Details</h1>
          <div className="user-detail-item">
            <strong>Name:</strong> {user.userName}
          </div>
          <div className="user-detail-item">
            <strong>Email:</strong> {user.userEmail}
          </div>
          <div className="user-detail-item">
            <strong>Age:</strong> {user.userAge}
          </div>
          <div className="user-detail-item">
            <strong>City:</strong> {user.userCity}
          </div>
          {/* Add more user details as needed */}
          <div className="button-group mt-4">
            <Button variant="primary" className="mr-2" onClick={handleUpdate}>Update</Button>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UserDetails;
