import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar, Sidebar } from './components';
import { About, Error404, Home, Services } from './pages';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" errorElement={<Error404 />}>
          <Route index element={<Home />} />
          <Route path="about" errorElement={<About />} />
          <Route path="services" errorElement={<Services />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
