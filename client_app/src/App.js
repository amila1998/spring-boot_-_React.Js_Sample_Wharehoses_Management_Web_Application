import React from 'react';
import Header from './components/header/Header';

import './App.css';
import MainLayot from './layouts/main/MainLayot';
import {BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
    <Router>
      <MainLayot/>
    </Router>
    </main>
    <footer>All copyright reserved @2022</footer>
    
    
    
    </>
  )
}

export default App;