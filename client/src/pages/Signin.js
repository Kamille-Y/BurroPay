import React, { useState } from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import API from "../utils/API"
import { useHistory } from 'react-router-dom'

const Signin = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("password is " + password);

        API.logIn({ username, password })
            .then(response => {
                console.log(response)
                history.push("/dashboard")
            })
    };

    return (
        <div>
            <div className="mt-4">
                <h2>Login to BurroPay!</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <Container className="mt-3 px-5">
                    <Col size="12">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Col>
                    <Col size="12">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Col>
                    <button className="btn btn-success" type="submit">Login</button>
                </Container>
            </form>
        </div>
    );
};

export default Signin;