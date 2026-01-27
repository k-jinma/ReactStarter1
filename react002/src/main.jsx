import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyHello from './MyHello.jsx'
import EventBasic from './EventBasic.jsx'
import StateBasic from './stateBasic.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <MyHello myName="鈴木" />
    <EventBasic param="b"/>

    <StateBasic a={10}/>
  </StrictMode>,
)
