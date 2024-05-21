import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { Suspense } from 'react';

import Home from './components/landingPage/Home';
import UsersList from './components/User/UsersList';
import CreateUser from './components/User/CreateUser';
import AboutUs from './components/Common/AboutUs';
import MenuBar from './components/Common/MenuBar';
import Footer from './components/Common/Footer';
import Loader from './helper/Loader'

import './App.css'
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import UserDetails from './components/User/UserDetails';

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
              <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
          </div>
          <ToastContainer />
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter >
  );
}

export default App;
