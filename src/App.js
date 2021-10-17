import React from 'react';

import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';




function App() {
  return (

    <div className="App">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
export default App;