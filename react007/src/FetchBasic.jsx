import { useState } from "react";

function FetchBasic() {
  const [user, setUser] = useState(null);

  async function handleClick() {
    // ① fetch で HTTP リクエストを送信
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    // ② レスポンスを JSON にパース
    const data = await response.json();
    // ③ state を更新 → React が再レンダリング
    setUser(data);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>ステップ1：最小限のfetch</h2>
      <button onClick={handleClick}>ユーザーを取得</button>
      {user && (
        <div style={{ marginTop: "12px", padding: "12px", background: "#f0f0f0", borderRadius: "8px" }}>
          <p><strong>名前：</strong>{user.name}</p>
          <p><strong>Email：</strong>{user.email}</p>
          <p><strong>会社：</strong>{user.company.name}</p>
        </div>
      )}
    </div>
  );
}

export default FetchBasic;