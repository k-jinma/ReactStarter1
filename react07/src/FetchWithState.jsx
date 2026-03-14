import { useState } from "react";

function FetchWithState() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleClick() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      // fetch は 404 でも reject しない → 自分でチェック
      if (!response.ok) {
        throw new Error(`HTTPエラー: ${response.status}`);
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);  // 成功でも失敗でも必ず実行
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>ステップ2：loading / error 付き</h2>

      <button onClick={handleClick} disabled={loading}>
        {loading ? "取得中..." : "ユーザーを取得"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "8px" }}>エラー: {error}</p>
      )}

      {user && (
        <div style={{ marginTop: "12px", padding: "12px", background: "#e8f5e9", borderRadius: "8px" }}>
          <p><strong>名前：</strong>{user.name}</p>
          <p><strong>Email：</strong>{user.email}</p>
          <p><strong>電話：</strong>{user.phone}</p>
        </div>
      )}
    </div>
  );
}

export default FetchWithState;