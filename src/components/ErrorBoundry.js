import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooooops. That is not good</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundry;