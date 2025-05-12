import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/'
import GloblaStyles from './styles/globlaStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GloblaStyles />
    <Home />
  </React.StrictMode>,
)
