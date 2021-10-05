import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Col,Row} from 'react-bootstrap';

const Address = () => {
    return (
    <div className="App">
            <header className="App-header">
            <Form>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="email"  placeholder="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
</Form>

          

 </header>
     </div>
   );
 }

 export default Address