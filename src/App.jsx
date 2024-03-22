import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeLayout from './layouts/HomeLayout';
import Home from "./pages/Home";
import ImageDetail from "./pages/ImageDetail";
import Login from './pages/Login';
import Register from './pages/Register';
import SearchItem from './components/SearchItem';
import './styles/App.sass';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/ImageDetail" element={<ImageDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/search" element={<SearchItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;