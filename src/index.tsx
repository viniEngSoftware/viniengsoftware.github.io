import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import ReactDOM from 'react-dom/client';  // Corrigir a importação para React 18
import App from './App';
import React from 'react';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);  // Usar createRoot no React 18
  
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
    </React.StrictMode>
    
  );
}

