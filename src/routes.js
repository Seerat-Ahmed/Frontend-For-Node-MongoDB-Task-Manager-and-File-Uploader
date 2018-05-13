import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { Switch } from 'react-router';
import Navbar from './components/Nav/Nav';
import App from './containers/App/App';
import FileUploader from './components/UploadFile/FileUploader';
import Home from './components/Home/Home';
import ProtectedRoute from './components/ProtectedRoutes/ProtectedRoutes';

class MyRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Navbar />
                        <Switch>
                            <ProtectedRoute
                                path='/login'
                                redirectComponent={App}
                                protectedComponent={Home} />
                                
                            <Route exact path={'/'} component={Home} />
                            <Route exact path={'/todos'} component={App} />
                            <Route exact path={'/files'} component={FileUploader} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default MyRouter;