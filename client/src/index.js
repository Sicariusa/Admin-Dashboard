import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
// we easily imported from state because we did edit in jsconfig
import globalReducer from "state"
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);


