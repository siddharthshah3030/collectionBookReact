import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GhostApp from './ghostApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GhostApp />, document.getElementById('root'));
registerServiceWorker();
