import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Bmi from './components/Bmi'
import Nav from './components/Nav'
import Age from './components/Age'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Nav />
      <Routes>
        <Route element={<App />} exact path='/calculator' />
        <Route element={<Bmi />} exact path='/bmi' />
        <Route element={<Age />} exact path='/age' />
      </Routes>
    </Router>
  </React.StrictMode>
);