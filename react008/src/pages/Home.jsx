// src/pages/Home.jsx

import { useNavigate } from 'react-router-dom';

function Home() {
    
  const navigate = useNavigate();
  
  const goToAbout = () => {
    navigate('/about');
  };

  const goToContact = () => {
    let userId = '1234';
    navigate(`/user/${userId}`);
  };

  return (
    <div>
      <h1>ホームページ</h1>
      <p>React Routerへようこそ！</p>
       <button onClick={goToAbout}>アバウトページへ</button>
       <button onClick={goToContact}>お問い合わせへ</button>
    </div>
  );
}

export default Home;