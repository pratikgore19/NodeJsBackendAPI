import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { Suspense } from 'react';

import Footer from './components/Footer';
import MenuBar from './components/MenuBar';
import Loader from './helper/Loader';

import './App.css'

const Home = React.lazy(() => import('./components/Home'));
const AboutUs = React.lazy(() => import('./components/AboutUs'));
const CreateUser = React.lazy(() => import('./components/CreateUser'));
const UsersList = React.lazy(() => import('./components/UsersList'));

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
