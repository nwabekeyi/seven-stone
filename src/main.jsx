// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './components/redux/Store'; // Import the store you created
import App from './App';

ReactDOM.render(
  <Provider store={Store}> {/* Pass the store as a prop to Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
