import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';


const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className='container'>
          <div className="page">
            <Navbar />
            <div className='page_content'>
              <Routes>
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/dialogs" element={<Dialogs />} />
                <Route exact path="/news" element={<News />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


