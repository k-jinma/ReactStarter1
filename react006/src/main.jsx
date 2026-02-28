import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CountTest from './CountTest'
import BadTimer from './BadTimer'
import GoodTimer from './GoodTimer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CountTest /> */}
    {/* <BadTimer /> */}
    {/* <GoodTimer /> */}
  </StrictMode>,
)
