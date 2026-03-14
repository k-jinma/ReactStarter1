import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AsyncDemo from './AsyncDemo.jsx'
import FetchBasic from './FetchBasic.jsx'
import FetchWithState from './FetchWithState.jsx'
import UserList from './UserList.jsx'
import PokemonInfoSWR from './PokemonInfoSWR.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsyncDemo />
    <FetchBasic />
    <FetchWithState />
    <UserList />
    <PokemonInfoSWR />
  </StrictMode>,
)
