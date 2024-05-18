import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { Suspense } from 'react';

import Home from './components/Home';
import UsersList from './components/UsersList';
import CreateUser from './components/CreateUser';
import AboutUs from './components/AboutUs';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import Loader from './helper/Loader'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={Loader}>
        <div className='App'>
          <MenuBar />
          <div className='content'>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/all-users" element={<UsersList />} />
              <Route path="/create-user" element={<CreateUser />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter >
  );
}

export default App;
