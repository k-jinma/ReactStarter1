// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    // 1️⃣ BrowserRouter：ルーティング機能を有効化する土台
    <BrowserRouter>
      {/* ナビゲーション部分 */}
      <nav>
        {/* 4️⃣ Link：ページ遷移のリンクを作成 */}
        <Link to="/">ホーム</Link> | 
        <Link to="/about">アバウト</Link> | 
        <Link to="/contact">お問い合わせ</Link>
      </nav>
      
      {/* ページ表示部分 */}
      {/* 2️⃣ Routes：ルート定義をまとめるコンテナ */}
      <Routes>
        {/* 3️⃣ Route：URLとコンポーネントを紐付け */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;