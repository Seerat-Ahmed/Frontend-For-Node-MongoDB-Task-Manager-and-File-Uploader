import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasToken: false,
        }
        this.checkforToken = this.checkforToken.bind(this);
        this.getToken = this.getToken.bind(this);
        this.deleteToken = this.deleteToken.bind(this);
    }

    componentWillMount() {
        this.checkforToken();
    }


    getToken() {

        axios.post('http://localhost:4000/user/login')
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem("token", res.data.token);
                    this.setState({ hasToken: true });
                    console.log('token ', localStorage.getItem('token'));
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }


    checkforToken() {
        let token = localStorage.getItem('token');
        if (token) {
            this.setState({ hasToken: true });
        }
        else {
            this.setState({ hasToken: false });
        }


    }

    deleteToken() {
        localStorage.clear();
        this.setState({ hasToken: false });
        console.log('token ', localStorage.getItem('token'));
    }

    render() {
        return (
            <div className="home">
                <br />
                <br />
                <div className="jumbotron">
                    <h1 className="display-4">Hello, There</h1>
                    <p className="lead">
                        This is a simple front end react app made to utilize apis of my own server.
                    </p>
                    <hr className="my-4" />
                    <p>
                        I uses node/express to create server and rest api.
                    </p>
                </div>

                <button
                    className={(this.state.hasToken) ? 'token-action btn btn-primary disabled' : ' btn btn-primary'}
                    onClick={this.getToken}>
                    {(!this.state.hasToken) ? 'Sign In' : 'All Set'}
                </button>
                {
                    (this.state.hasToken) ? <button className="btn btn-danger" onClick={this.deleteToken}>Logout</button> : null

                }
            </div>
        )
    }
}

export default Home;