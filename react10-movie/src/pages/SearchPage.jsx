// src/pages/SearchPage.jsx
import { useNavigate } from 'react-router-dom';

// ダミーデータ（表示の確認用）
const dummyMovies = [
  { id: 1, title: 'トップガン マーヴェリック', release_date: '2022-05-27', poster_path: null },
  { id: 2, title: 'インターステラー', release_date: '2014-11-22', poster_path: null },
  { id: 3, title: 'ジョーカー', release_date: '2019-10-04', poster_path: null },
];

function SearchPage() {
  const navigate = useNavigate();  // ← 追加

  return (
    <div>
      {/* 検索バー */}
      <div className="search-bar">
        <input type="text" placeholder="映画タイトルを入力..." />
        <button>検索</button>
      </div>

      {/* 映画一覧 */}
      <div className="movie-grid">
        {dummyMovies.map((movie) => (
          <div key={movie.id} className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
            <img src="https://via.placeholder.com/300x450?text=No+Image" alt={movie.title} />
            <div className="movie-card-info">
              <h3>{movie.title}</h3>
              <p>{movie.release_date.slice(0, 4)}年</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;