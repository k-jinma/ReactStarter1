import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyHello from './MyHello.jsx' // ./NyHello でも可
import EventBasic from './EventBasic.jsx'
import StateBasic from './StateBasic.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyHello myName="鈴木" />
    <EventBasic a="0" />
    <StateBasic a="0" />
    <StateBasic a={0} />
  </StrictMode>,
);
