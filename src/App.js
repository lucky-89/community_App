// /App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GroupDetail from './pages/GroupDetail';
import Header from './componants/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group/:id" element={<GroupDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
