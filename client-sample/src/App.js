import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AboutUs from './components/AboutUs';
import CreateUser from './components/CreateUser';
import Footer from './components/Footer';
import Home from './components/Home';
import MenuBar from './components/MenuBar';
import UsersList from './components/UsersList'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <MenuBar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-users" element={<UsersList />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
