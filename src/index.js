import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import MyRouter from './routes';

ReactDOM.render(<MyRouter />, document.getElementById('root'));
registerServiceWorker();
