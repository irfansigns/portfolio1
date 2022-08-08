import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/fontawesome.css';
import './assets/theme/vendor/bootstrap-select/css/bootstrap-select.min.css'
import './assets/theme/css/style.default.css'
import './assets/theme/css/custom.css'

import axios from 'axios'


axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token');

ReactDOM.render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


