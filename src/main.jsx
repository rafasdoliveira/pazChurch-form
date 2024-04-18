import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CadastroIndividual from './pages/cadastro.jsx'
import CadastroCSV from './pages/cadastroCSV.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastroindividual" element={<CadastroIndividual />} />
        <Route path="/cadastrocsv" element={<CadastroCSV />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
