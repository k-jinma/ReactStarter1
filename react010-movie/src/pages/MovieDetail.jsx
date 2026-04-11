// src/pages/MovieDetail.jsx
import { useNavigate } from 'react-router-dom'; 

const dummyMovie = {
  title: 'トップガン マーヴェリック',
  tagline: '不可能な任務がまた始まる',
  vote_average: 8.3,
  release_date: '2022-05-27',
  runtime: 130,
  genres: [{ id: 1, name: 'アクション' }, { id: 2, name: 'ドラマ' }],
  overview: 'マーヴェリックはトップガンのパイロットとしてスペシャリストの地位を楽しんでいたが、やがて危険なミッションへと導かれる。',
  poster_path: null,
};

function MovieDetail() {

  const navigate = useNavigate();
    
  const posterUrl = 'https://via.placeholder.com/500x750?text=No+Image';
  
  return (
    <div className="movie-detail">
      <button className="back-button" onClick={() => navigate(-1)}>← 戻る</button>
      <div className="detail-content">
        <img src={posterUrl} alt={dummyMovie.title} className="detail-poster" />
        <div className="detail-info">
          <h2>{dummyMovie.title}</h2>
          <p className="tagline">{dummyMovie.tagline}</p>
          <div className="detail-meta">
            <span>⭐ {dummyMovie.vote_average}</span>
            <span>{dummyMovie.release_date.slice(0, 4)}年</span>
            <span>{dummyMovie.runtime}分</span>
          </div>
          <div className="genres">
            {dummyMovie.genres.map((genre) => (
              <span key={genre.id} className="genre-tag">{genre.name}</span>
            ))}
          </div>
          <h3>あらすじ</h3>
          <p>{dummyMovie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;