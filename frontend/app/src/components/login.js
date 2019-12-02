
import React , {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render() {
        return (
        <div className="container">

            <h1>Bienvenidos</h1>
            <Form id="loginForm" method="post" onSubmit={this.login}>
                <Form.Group>
                    <Form.Label for="email">Email</Form.Label>
                    <Form.Control
                        type="text"
                        validations={['required','isUser']}
                        name="username"
                        size="sm"
                        id="username"
                        placeholder="Enter your email address."
                    />
                    
                </Form.Group>
                <Form.Group>
                    <Form.Label for="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        validations={['required']}
                        name="password"
                        size="sm"
                        id="password"
                        placeholder="Enter your password."
                    />
                    
                </Form.Group>
                <Button >login</Button>
            </Form>
        </div>
        )}
};
export default Login;