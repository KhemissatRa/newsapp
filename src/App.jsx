import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyProvider } from './context';
import './App.css';
import Login from './login';
import NavBar from './navBar';
import TechNews from './technews';
import Post from './post';

function App() {
  return (
    <MyProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Tech' element={<TechNews />} />
          <Route path="/post/:id" element={<Post/>} /> 
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;