import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AsyncDemo from './AsyncDemo'
import FetchBasic from './FetchBasic'
import UserList from './UserList'
import PokemonInfoSWR from './PokemonInfoSWR'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsyncDemo />
    <FetchBasic />
    <UserList />
  </StrictMode>,
)
