import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import basketStore from './store/basketStore';
import brandStore from './store/brandStore';
import deviceStore from './store/deviceStore';
import typeStore from './store/typeStore';
import userStore from './store/userStore';

export const Context = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value = {{
    user: new userStore(),
    device: new deviceStore(),
    type: new typeStore(),
    brand: new brandStore(),
    basket: new basketStore()
  }}>
    <App />
  </Context.Provider>
);
