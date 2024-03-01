import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ContextAppProvider from './context/contextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextAppProvider>
    <App />
  </ContextAppProvider>,
)
