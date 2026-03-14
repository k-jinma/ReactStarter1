import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ※ useEffect に直接 async を渡せないので、中で定義して呼ぶ
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`HTTPエラー: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);  // ← 空配列 = マウント時に1回だけ実行
  // state が変わると React が再レンダリングするので[]がなければ無限ループする

  if (loading) return <p style={{ padding: "20px" }}>読み込み中...</p>;
  if (error) return <p style={{ padding: "20px", color: "red" }}>エラー: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>ステップ3：ユーザー一覧（自動取得）</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ background: "#1976d2", color: "#fff" }}>
            <th style={{ padding: "8px", textAlign: "left" }}>ID</th>
            <th style={{ padding: "8px", textAlign: "left" }}>名前</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Email</th>
            <th style={{ padding: "8px", textAlign: "left" }}>都市</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px" }}>{user.id}</td>
              <td style={{ padding: "8px" }}>{user.name}</td>
              <td style={{ padding: "8px" }}>{user.email}</td>
              <td style={{ padding: "8px" }}>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;