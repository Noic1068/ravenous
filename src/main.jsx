import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Business from './Business.jsx'
import BusinessList from './BusinessList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BusinessList />
  </StrictMode>
)
