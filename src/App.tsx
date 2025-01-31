import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';

// TODO Add a new route for the About page and 404 page
const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App
