import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Register() {
  const [details,setDetails]=useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    address:"",
    city:"",
    userType:"user",
    state:"",
    zipCode:""

  })
  return (
    <div id="Form-Container">
      <Form>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required placeholder="Enter ur Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone No</Form.Label>
          <Form.Control type="number" required placeholder="Enter ur Number" />
        </Form.Group>
      </Row>
      <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email :</Form.Label>
            <Form.Control type="email" required placeholder="Enter email" />
          </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUser">
          <Form.Label>UserType :</Form.Label>
          <Form.Select>
            <option>Choose User Type</option>
            <option value="user">user</option>
            <option value="admin">admin</option>


          </Form.Select>
        </Form.Group>

        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Create Password</Form.Label>
          <Form.Control type="password" required placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control required placeholder="1234 Main St" />
      </Form.Group>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label >City</Form.Label>
          <Form.Control required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select required defaultValue="Choose...">
            <option>Choose...</option>
            <option>AP</option>
            <option>MP</option>
            <option>TN</option>
            <option>JK</option>

          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

     < Form.Group className="mb-3" >
        <span>if u already Registered,Click here to <a href="/Login.jsx">Login</a> </span>
      </Form.Group>



      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
  );
}

export default Register;