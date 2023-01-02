import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { store } from './store/index.js';
import { persistor } from './store/index.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import axios from 'axios';

// import dotenv from 'dotenv';
// dotenv.config();

axios.defaults.baseURL =
  // `https://project-weather-production.up.railway.app/` ||
  'http://localhost:3001';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// );

// ReactDOM.render(<App />, document.getElementById('root'));
