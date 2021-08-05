import React, { Component } from "react";
import Container from '../components/Container';

import SendCashBtn from './SendCash.page';
import RequestCashBtn from './RequestCash';


export default class Dashboard extends Component {
    render() {
        return (
        <Container className="container">
            <button onClick={SendCashBtn}>Send $$</button>
            <button onClick={RequestCashBtn}>Request $$</button>
        </Container>
        )
    }
}