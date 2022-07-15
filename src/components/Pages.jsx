import React from 'react';
import Home from './Home';
import { Route, Routes, useLocation } from 'react-router-dom'
import ZodiacToday from './ZodiacToday';

function Pages() {
    const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/:type" element={<ZodiacToday />} />
    </Routes>
  )
}

export default Pages