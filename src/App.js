import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';


function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
        </Routes>
    </>
  );
}

export default App;