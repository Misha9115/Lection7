import React, { Component } from 'react';
import Login from './Login';
export default class TextForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: false,
            key: 0
        };
    }
    componentDidUpdate() {
        if (this.state.login == true && this.state.key === 0) {
            this.setState({
                login: false,
                key: this.state.key + 1
            });
        };
        if (this.state.login == true && this.state.key === 1) {
            this.setState({
                login: false,
                key: this.state.key - 1
            });
        };
    }
    onToggleButtonClick() {

        this.setState(state => ({ login: !state.login }));
    }


    render() {
        return (
            <div>
                <h1>Topic: Lifecycle Methods - Mostly Used metod Demo</h1>
                {
                    <Login onToggleButtonClick={this.onToggleButtonClick.bind(this)} num={this.state.key} />
                   
                }
            </div>
        );
    }
}


