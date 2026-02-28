import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CountTest from './CountTest.jsx'
import BadTimer from './BadTimer.jsx'
import GoodTimer from './GoodTimer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountTest />
    {/* <Counter /> */}
    {/* <BadTimer /> */}
    {/* <GoodTimer /> */}
  </StrictMode>,
)
