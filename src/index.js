import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import 'react-select/dist/react-select.css';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
