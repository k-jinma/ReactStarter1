import { useState } from "react";

function AsyncDemo() {
  const [message, setMessage] = useState("ボタンを押してください");
  const [waiting, setWaiting] = useState(false);

  // ★ async = 「この関数の中で await を使います」という宣言
  async function handleClick() {
    setWaiting(true);
    setMessage("待機中...");

    // ★ await = 結果が届くまで「この関数の中だけ」待つ（画面は止まらない）
    const result = await new Promise((resolve) => {
      setTimeout(() => { // 2秒後にデータが届く
        resolve("2秒後にデータが届きました！");
      }, 2000);
    });

    setMessage(result);
    setWaiting(false);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>async/await 体験</h2>
      <button onClick={handleClick} disabled={waiting}>
        {waiting ? "待機中..." : "データを要求"}
      </button>
      <p style={{
        marginTop: "12px",
        padding: "12px",
        background: message.includes("届きました") ? "#e8f5e9" : "#f5f5f5",
        borderRadius: "8px",
      }}>
        {message}
      </p>
    </div>
  );
}

export default AsyncDemo;