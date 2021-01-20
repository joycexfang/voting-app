import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Polls from './components/polls';

function App() {
  return (
  <React.Fragment>
    <NavBar />
    <main className="container">
        <Polls />
    </main>
  </React.Fragment>
  );
}

export default App;
