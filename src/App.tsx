import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Site from './pages/Site';

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/*" element={<Site />} />
      </Routes>
  );
};

export default App;
