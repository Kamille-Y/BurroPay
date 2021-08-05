import React, { Component } from "react";
import { createPortal } from "react-dom";

import "./simple-portal.scss";

export default class SimplePortal extends Component {
    constructor() {
    super();

    this.state = {
        summary: [],
        input: "",
        showDialog: false,
    };

    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._onFocus = this._onFocus.bind(this);
    }

    _onChange(e) {
    let input = e.target.value;

    this.setState({ input });
    }

    _onSubmit(e) {
    e.preventDefault();
    let showDialog = false;

    // Dont Mutate the State!!!
    let summary = this.state.summary.slice();

    summary.push(this.state.input);

    this.setState({ showDialog, summary, input: "" });
    }

    _onFocus() {
    this.textInput.focus();
    }

    render() {
    const { showDialog, summary, input } = this.state;

    return (
        <div className="container">
        <div>
            <button
            className="btn btn-reg"
            onClick={(e) =>
                this.setState({
                showDialog: !showDialog,
                })
            }
            >
            Lend
            </button>
        </div>

        {/* Render Items from summary */}
        <div>
            <ul>
            {summary.map((item) => {
                return <li key={item}>{item}</li>;
            })}
            </ul>
        </div>

        {/* Show Modal - Renders Outside React Hierarchy Tree via Portal Pattern */}
        {showDialog === true ? (
            <DialogModal>
            <div className="dialog-wrapper">
                <h1>Select User</h1>
                <form onSubmit={this._onSubmit}>
                <input type="text" value={input} onChange={this._onChange} />
                </form>
                <h1>Amount</h1>
                <form onSubmit={this._onSubmit}>
                <input type="number" value={input} onChange={this._onChange} />
                </form>
                <h1>Duration Month</h1>
                <form onSubmit={this._onSubmit}>
                <input type="number" value={input} onChange={this._onChange} />
                </form>
                <h1>Terms and Fees</h1>
                <form onSubmit={this._onSubmit}>
                <input type="number" value={input} onChange={this._onChange} />
                </form>
            </div>
            </DialogModal>
        ) : null}
        </div>
    );
    }
}

class DialogModal extends Component {
    constructor() {
    super();
    this.body = document.getElementsByTagName("body")[0];
    this.el = document.createElement("div");
    this.el.id = "dialog-root";
    }

    componentDidMount() {
    this.body.appendChild(this.el);
    this.props.onFocus();
    }

    componentWillUnmount() {
    this.body.removeChild(this.el);
    }

    render() {
    return createPortal(this.props.children, this.el);
    }
}