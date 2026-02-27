import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateEffect from './StateEffect.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateEffect />
  </StrictMode>,
)
