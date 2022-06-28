import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './styles/main.scss';
import { GithubSearchApp } from './GithubSearchApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GithubSearchApp />
    </BrowserRouter>
  </React.StrictMode>
)
