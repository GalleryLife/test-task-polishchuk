import './App.css';
import React from 'react';
import {Suspense} from 'react';
import {useSelector} from 'react-redux';
import Header from './components/Header/Header';
import Success from './components/Success/Succes';
import AuthUser from './components/AuthUser/AuthUser';
import ProductMain from './components/ProductMain/ProductMain';

const Users = React.lazy(() => import('./components/Users/Users'))

const App = () => {
  const {authResponse} = useSelector(({users}) => users)
  
  return (
    <>
      <Header/>
      <main>
        <ProductMain/>
        <section className="container">
          <Suspense fallback={'Loading...'}>
            <Users/>
          </Suspense>
          {
            authResponse.success ?
            <Success responseText={authResponse.message}/>
            :
            <AuthUser responseText={authResponse.message}/>
          }
        </section>
      </main>
    </>
  );
}

export default App;
