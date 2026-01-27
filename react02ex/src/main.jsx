import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import books from './books' // books.js をインポート
import ForList from './ForList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ForList src={books} />
  </StrictMode>,
)
