// src/pages/UserProfile.jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();

  return (
    <div>
      <h1>ユーザープロフィール</h1>
      <p>ユーザーID: {userId}</p>
    </div>
  );
}

export default UserProfile;