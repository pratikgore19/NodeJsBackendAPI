import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

import '../../styles/UserDetails.css'

import * as userService from '../../service/userService'

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const apiResponse = await userService.getUserById(id)
        setUser(apiResponse.user);
      } catch (err) {
        setError('Error fetching user details');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleUpdate = () => {
    navigate(`/user/edit/${id}`);
  }

  const handleDelete = async () => {
    var confirmation = window.confirm('Are you sure? You want to delete the user details');
    if (confirmation) {
      try {
        const apiResponse = await userService.deleteUser(id);
        toast.success(apiResponse.message);
      } catch (err) {
        alert('Error deleting user')
      } finally {
        console.log('User deleted');
      }
      navigate("/all-users");
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
      <Row className='justify-content-center'>
        <h1>Client Details</h1>
        <Col md={1}>
          <div className="user-detail-item">
            <strong>Name:</strong> 
          </div>
          <div className="user-detail-item">
            <strong>Email:</strong> 
          </div>
          <div className="user-detail-item">
            <strong>Age:</strong> 
          </div>
          <div className="user-detail-item">
            <strong>City:</strong> 
          </div>
        </Col>
        <Col md={3} className='text-start'>
          <p>{user.userName}</p>
          <p>{user.userEmail}</p>
          <p>{user.userAge}</p>
          <p>{user.userCity}</p>
        </Col>
        <div className="button-group mt-4">
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </Row>
    </Container>
  );
}

export default UserDetails;
