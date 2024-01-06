import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { DataContextProvider } from './Hooks/DataContext.jsx'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </DataContextProvider>
  </React.StrictMode>,
)
