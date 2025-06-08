// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Certifique-se de que o caminho esteja correto
import './index.css' // Opcional: estilos globais

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
