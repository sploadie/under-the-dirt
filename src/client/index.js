import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from './components/App.jsx';

import styles from './scss/application.scss';

render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById('root')
);
