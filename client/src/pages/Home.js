import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Col from "../components/Col";
import { Link } from "react-router-dom";


export default class Home extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: 10 }}>
          <Hero backgroundImage="burro_app_logo.png"></Hero>
          <Col size="md-12">
            <h1>"Burro" or Lend Cash to Anyone from Anywhere!</h1>
            <h3>
              Click <Link to="./Signin">here</Link> to start 'burro'ing now!
            </h3>
          </Col>
        </Container>
      </div>
    )
  }
}