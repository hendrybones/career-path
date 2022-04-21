import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Routes, Route } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <HashRouter>
 <Routes>
 <Route path="/" element={<App/>} />
 <Route path="/about" element={<AboutComponent/>}/>
 </Routes>
 </HashRouter>
 </React.StrictMode>,
 document.getElementById("root")

);
