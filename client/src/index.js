import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import brandStore from './store/brandStore';
import deviceStore from './store/deviceStore';
import typeStore from './store/typeStore';
import userStore from './store/userStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value = {{
    user: userStore,
    device: deviceStore,
    type: typeStore,
    brand: brandStore
  }}>
    <App />
  </Context.Provider>
);
