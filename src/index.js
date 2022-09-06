import React from 'react';
import ReactDOM from 'react-dom/client';
import App4 from './App4';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContextRouter';
import './tailwind.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App4 />
    </AuthProvider>
  </BrowserRouter>
);


