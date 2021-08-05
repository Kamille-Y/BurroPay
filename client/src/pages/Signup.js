import React, { useState } from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import API from "../utils/API"
import { useHistory } from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email,     setEmail] = useState();
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("password is " + password);
        console.log("email is" + email );
        API.register({username, password, email })
        .then(response => {
            console.log(response)
            history.push("/dashboard")
        })
    };

    return (
        <div>
            <div className="mt-4">
                <h2>Welcome to BurroPay!</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <Container className="mt-3 px-5">
                    <Col size="12">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={e => setUsername(e.target.value)}
                    />
                    </Col>
                    <Col size="12">
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                    // I need to build a password confirmation
                    />
                    </Col>
                    <Col size="12">
                    <input
                        className="form-control"
                        type="email"
                        placeholder="email@example.com"
                        name="password"
                        onChange={e => setEmail(e.target.value)}
                    />
                    </Col>
                    <button className="btn btn-success" type="submit">Register</button>
                </Container>
                {/* <Container className="mt-4">
                    <h3>Hello {username}!</h3>
                    <p> Pssst, your password is {password}!</p>
                </Container> */}
            </form>
        </div>
    );
};

    export default Signup;