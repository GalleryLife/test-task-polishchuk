import React from 'react';
import './App.css';
import Users from './components/Users/Users';
import AuthUser from './components/AuthUser/AuthUser';
import Header from './components/Header/Header';
import ProductMain from './components/ProductMain/ProductMain';

function App() {
  return (
    <>
      <Header/>
      <main>
        <ProductMain/>
        <section className="container">
          <Users/>
          <AuthUser/>
        </section>
      </main>
    </>
  );
}

export default App;
