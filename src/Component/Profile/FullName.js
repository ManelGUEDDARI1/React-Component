import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Col,Row} from 'react-bootstrap';

const FullName = () => {
    return (
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Please enter your name
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text"  placeholder="Jhon snow" />
    </Col>
  </Form.Group>
    )
}

export default FullName