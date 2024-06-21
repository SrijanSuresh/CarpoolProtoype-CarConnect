import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './login';
import { AuthProvider } from './context/AuthContexts';
import reportWebVitals from './reportWebVitals';
import Signup from './signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
