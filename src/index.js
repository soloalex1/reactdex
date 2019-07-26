import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister(); // vou focar na UI por enquanto, ativo PWA depois
// Learn more about service workers: https://bit.ly/CRA-PWA
