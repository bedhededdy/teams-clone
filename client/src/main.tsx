import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.tsx";
import App from './App.tsx'

// These styles will apply to the entire app
import "normalize.css";
import "./index.scss";

// TODO: WILL NEED TO ADD A ROUTER HERE EVENTUALLY
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
