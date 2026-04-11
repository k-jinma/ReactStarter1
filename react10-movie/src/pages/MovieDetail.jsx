// src/pages/MovieDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 


function MovieDetail() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  // ← 追加：ダミーデータの代わりにstateで管理
  const [movie, setMovie] = useState(null);            // 取得した映画データ
  const [isLoading, setIsLoading] = useState(true);    // 読み込み中かどうか
  const [error, setError] = useState(null);            // エラーメッセージ

    // ← 追加：ページ表示時に自動でAPIを呼び出す
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ja-JP`
        );
        const data = await response.json();
        setMovie(data);                                // 取得データをstateに格納
      } catch (_err) {
        setError('映画情報の取得に失敗しました');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);  // movieIdが変わるたびに再実行

  // ← 追加：状態に応じて表示を切り替え
  if (isLoading) return <p className="message">読み込み中...</p>;
  if (error) return <p className="message error">{error}</p>;
  if (!movie) return null;

  // ← 書き換え：ダミーのposterUrlをAPIのデータから組み立てる
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="movie-detail">
      <button className="back-button" onClick={() => navigate(-1)}>← 戻る</button>
      <div className="detail-content">
        <img src={posterUrl} alt={movie.title} className="detail-poster" />
        <div className="detail-info">
          <h2>{movie.title}</h2>
          {movie.tagline && <p className="tagline">{movie.tagline}</p>}
          <div className="detail-meta">
            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
            <span>{movie.release_date.slice(0, 4)}年</span>
            <span>{movie.runtime}分</span>
          </div>
          <div className="genres">
            {movie.genres?.map((genre) => ( 
              <span key={genre.id} className="genre-tag">{genre.name}</span>
            ))}
          </div>
          <h3>あらすじ</h3>
          <p>{movie.overview || 'あらすじ情報がありません'}</p> 
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;