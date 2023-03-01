import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import CardDetail from './pages/cardDetail';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={'/cardDetails/:cardId?'} element={<CardDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
