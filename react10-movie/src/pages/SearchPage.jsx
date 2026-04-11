// src/pages/SearchPage.jsx
import { useState } from 'react';  
import { useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


function SearchPage() {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState('');      // ← 追加：入力中のキーワード
  const [movies, setMovies] = useState([]);        // ← 追加：検索結果の映画一覧


  const searchMovies = async () => {
    // 1. APIのURLを組み立てる
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=トップガン&language=ja-JP`;

    // 2. fetchでリクエストを送る
    const response = await fetch(url);

    // 3. レスポンスをJSONに変換する
    const data = await response.json();

    // 4. 受け取ったデータをコンソールで確認
    console.log(data);          // APIレスポンス全体
    console.log(data.results);  // 映画の配列
    console.log(data.results[0]); // 先頭1件のデータ

    setMovies(data.results); 
  };

  return (
    <div>
      {/* 検索バー */}
      <div className="search-bar">
        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="映画タイトルを入力..." />
        <button onClick={searchMovies}>検索</button>
      </div>

      {/* 映画一覧 */}
      <div className="movie-grid">
        {movies.map((movie) => {
          const posterUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`; // ← ポスター画像URLを組み立てる
          const year = movie.release_date.slice(0, 4);
          return (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <img src={posterUrl} alt={movie.title} />
              <div className="movie-card-info">
                <h3>{movie.title}</h3>
                <p>{year}年</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage;