import React, { Component } from "react";
import Container from "../Container";
import Card from "../Card";
import LoanTableData from '../LoanTable/index';
import RequestTableData from '../RequestTable/index';
import "./style.css";
import API from "../../utils/API";


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            loans: [],
            borrows: []
        };
    }

    componentDidMount () {
        this.setState({ ...this.state, isFetching: true });
        API.getLoan().then(result => { 
            console.log(result.data)
            this.setState({ ...this.state, loans: result.data })
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state, isFetching: false});
            });

        this.setState({ ...this.state, isFetching: true });
        API.getBorrow().then(result => {
            console.log(result.data)
            this.setState({ ...this.state, borrows: result.data })
        })
        .catch(e => {
            console.log(e);
            this.setState({...this.state, isFetching: false});
        });
    }

    handleSendClick () {
        this.props.history.push("/sendmoney");
    }

    handleRequestClick () {
        this.props.history.push("/requestmoney");
    }

    render() {
        return (
            <Container>
                <div className="col s1 m2">
                <h2>Dashboard</h2>
                </div>
                <Card>
                    <LoanTableData loanData={this.state.loans} />
                    <p>{this.state.isFetching ? 'Fetching loans...' : ''}</p>
                    <RequestTableData borrowData={this.state.borrows} />
                    <p>{this.state.isFetching ? 'Fetching requests...' : ''}</p>
                    <button onClick={() => this.handleSendClick()}>Send Money</button>
                    <button onClick={() => this.handleRequestClick()}>Request Money</button>
                </Card>
            </Container>
        );
    }
}
