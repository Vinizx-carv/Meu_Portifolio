import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './container/Home.jsx'; // Certifique-se de que o caminho está correto!
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
  </StrictMode>,
);
