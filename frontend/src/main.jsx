import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./styles/styles.scss"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Popup from './components/Popup'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/popup" element={<Popup />}/>
   </Routes>
    </BrowserRouter>
 
)
