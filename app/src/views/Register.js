import React from 'react';
import { Form, Button, Container, Spinner, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import { showError } from '../utils/errors';
import { CenterContent } from './styles/Auth';

// Props will be sent from action creaors, map state to props via redux stroe
const Register = ({ registerUser, loading, user, error }) => {
  let history = useHistory();
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    street: '',
    city: '',
    state: '',
  };

  const { register, handleSubmit, formState, errors, reset } = useForm({
    defaultValues: { ...initialValues },
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
    //registerUser function from action creator
    // registerUser(data).then((res) => {
    //   if (res.status === 200) {
    reset(initialValues);
    history.push('/');
    //   }
    // });
  };

  return (
    <CenterContent>
      <Container>
        {error && <Alert variant="danger">{error}</Alert>}
        {user && <Alert variant="success">Successfully registered!</Alert>}

        <h3>Register Customer</h3>
        <div>Please fill in your details</div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              ref={register({
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Must be at least 2 chars long',
                },
              })}
            />
          </Form.Group>
          {showError('name', errors)}

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              ref={register({
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address format',
                },
              })}
            />
          </Form.Group>
          {showError('email', errors)}

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              placeholder="Enter phone number"
              ref={register({
                required: 'Phone number is required',
                pattern: {
                  value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i,
                  message: 'Invalid phone number format',
                },
              })}
            />
          </Form.Group>
          {showError('phone', errors)}

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter Username"
              ref={register({
                required: 'Username is required',
                minLength: {
                  value: 2,
                  message: 'Must be at least 2 chars long',
                },
              })}
            />
          </Form.Group>
          {showError('username', errors)}

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              ref={register({
                required: 'Password is required',
                minLength: {
                  value: 7,
                  message: 'Must be at least 7 chars long',
                },
              })}
            />
          </Form.Group>
          {showError('password', errors)}

          <h3>Billing Address</h3>

          <Form.Group controlId="formBasicStreet">
            <Form.Label>Street Name</Form.Label>
            <Form.Control
              type="text"
              name="street"
              placeholder="Enter Street Name"
              ref={register({
                required: 'Street Name is required',
                minLength: {
                  value: 2,
                  message: 'Must be at least 2 chars long',
                },
              })}
            />
          </Form.Group>
          {showError('street', errors)}

          <Form.Group controlId="formBasicStreet">
            <Form.Label>Apartment Number</Form.Label>
            <Form.Control
              type="number"
              name="apartment"
              placeholder="Enter Apartment Number"
              ref={register({
                required: 'Apartment Number is required',
                minLength: {
                  value: 1,
                  message: 'Must be at least 1 chars long',
                },
              })}
            />
          </Form.Group>
          {showError('apartment', errors)}

          <Form.Group controlId="formBasicStreet">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="Enter City"
              ref={register({
                required: 'City is required',
                minLength: {
                  value: 2,
                  message: 'Must be at least 2 chars long',
                },
              })}
            />
          </Form.Group>
          {showError('city', errors)}

          <Form.Group controlId="formBasicStreet">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              placeholder="Enter State"
              ref={register({
                required: 'State is required',
                minLength: {
                  value: 2,
                  message: 'Must be at least 2 chars long',
                },
              })}
            />
          </Form.Group>
          {showError('state', errors)}

          <Button
            block
            variant="primary"
            type="submit"
            disabled={!formState.isValid}
          >
            {loading ? (
              <Spinner animation="border" variant="light" />
            ) : (
              'Register'
            )}
          </Button>
          <div className="account">
            Have an account? <Link to="/login">Login</Link>
          </div>
        </Form>
      </Container>
    </CenterContent>
  );
};
export default Register;
