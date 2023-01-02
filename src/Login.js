import React from 'react'
import {Form,Button} from 'react-bootstrap'

function Login() {
    return (
        <div><h1>Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" style={{width:"25%",margin:"auto"}}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" style={{width:"25%",margin:"auto"}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{margin:"auto"}}>
                    <Form.Check type="checkbox"  style={{margin:"auto"}} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login