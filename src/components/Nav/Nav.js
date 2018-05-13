import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img src={require("../../logo.svg")}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="" />
                        Rest Api
                </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="todos">Todo</Link>
                            <Link className="nav-item nav-link" to="files">Files</Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;