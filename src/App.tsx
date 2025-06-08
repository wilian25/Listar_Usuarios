import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Usuarios from './pages/usuarios';
import Dados from './pages/dados';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/dados/:id" element={<Dados />} />
        <Route path="*" element={<Navigate to="/usuarios" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
