import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './animacion.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <App />
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
    </>
  </React.StrictMode>,
)
