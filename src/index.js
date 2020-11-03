import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import _ from 'lodash';
const runtime = require('react-refresh/runtime')

// if (process.env.NODE_ENV !== 'production') {
//     runtime.injectIntoGlobalHook(window)
//     window.$RefreshReg$ = () => { }
//     window.$RefreshSig$ = () => type => type;
// }
// let enqueUpdate = _.debounce(runtime.performReactRefresh, 30);

ReactDOM.render(<App />, document.getElementById('root'));

// if (module.hot) {
//     module.hot.accept('./App', () => {
//         ReactDOM.render(<App />, document.getElementById('root'))
//     })
// }

// if (module.hot) {
//     module.hot.accept()
//     enqueUpdate();
// }