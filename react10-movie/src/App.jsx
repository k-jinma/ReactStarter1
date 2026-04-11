import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import MovieDetail from './pages/MovieDetail';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>映画検索アプリ</h1>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App
