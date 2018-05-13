import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class ProtectedRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    componentWillMount() {
        this.setState({
            user: localStorage.getItem('user')
        });
    }

    componentDidMount() {
        console.log(this.state.user);
    }
    render() {
        return (
            (this.state.user) ?
                <Route path={this.props.path} component={this.props.protectedComponent} />
                :
                <Route path={this.props.path} component={this.props.redirectComponent} />
        )

    }
}


export default ProtectedRoute;