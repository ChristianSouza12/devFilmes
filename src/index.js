import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import Router from './routes/routes.jsx';
import GlobalStyle from './styles/globalStyles';
import '@fortawesome/fontawesome-free/css/all.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter />
    <Router/>
    
    <GlobalStyle/>
    
  </React.StrictMode>
  
);


