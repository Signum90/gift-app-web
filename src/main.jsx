/** ===============================================
* @Name: ENTRY MAIN POINT
================================================= */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// COMPONENTE DE ENTRADA
import App from './App.jsx'
// ESITLOS
import './styles.css';
// DOCUMENT ROOT
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
