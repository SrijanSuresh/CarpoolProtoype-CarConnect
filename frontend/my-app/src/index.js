import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import MapScreen from './webpages/mapscreen';
import Home from './webpages/home';
import App from './App';
import Login from './webpages/login';
import { AuthProvider } from './context/AuthContexts';
import reportWebVitals from './reportWebVitals';
import Signup from './webpages/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/map" element={<MapScreen/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
