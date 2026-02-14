import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateForm from './StateForm.jsx'

createRoot(document.getElementById('root'), { identifierPrefix: 'root'} ).render(
  <StrictMode>
    <StateForm />
    
  </StrictMode>,
)
