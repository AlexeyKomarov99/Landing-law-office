import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// //===== components =====//
import TitlePage from './components/TitlePage/TitlePage';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
//===== assets =====//
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TitlePage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App;