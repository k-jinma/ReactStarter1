import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateForm from './StateForm.jsx'
import StateTodoRemove from './StateTodoRemove.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <StateForm /> */}
    <StateTodoRemove />
  </StrictMode>,
)
