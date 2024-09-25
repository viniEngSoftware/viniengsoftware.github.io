// src/pages/Routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostsInstagram from '../pages/PostsInstagram';
import Servicos from '../pages/Servicos';
import Sobre from '../pages/Sobre';

const SiteRoutes: React.FC = () => {
  return (
    <Routes>
      {/* As rotas devem apontar para cada seção do site */}
      <Route path="/instagram" element={<PostsInstagram />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/sobre" element={<Sobre />} />
      {/* Você pode adicionar mais rotas conforme necessário */}
    </Routes>
  );
};

export default SiteRoutes;
