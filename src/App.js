import React from 'react';

import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';
import Routers from './components/Routers';
import './App.css';





function App() {
  return (

    <div className="App">
      <Header />
      <Routers />
      <Main />
      <Footer />
    </div>
  );
}
export default App;