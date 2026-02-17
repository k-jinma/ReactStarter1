import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form1 from "./Form1.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form1 />
  </StrictMode>,
)
