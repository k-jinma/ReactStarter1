import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateForm from './StateForm.jsx'
import StateTodo from './StateTodo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <StateForm /> */}
    <StateTodo />
  </StrictMode>,
)
