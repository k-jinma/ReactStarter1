// InfoSwitcher.jsx
import { useState } from "react"; // 状態管理のために useState をインポートします

export default function InfoSwitcher() {
  // 初期値を「ここをチェック」として状態を定義します
  const [message, setMessage] = useState("ここをチェック");

  // マウスが入ったときの処理
  const handleEnter = () => {
    setMessage("詳しくはこちら"); // Stateを更新することで再描画が走ります
  };

  // マウスが離れたときの処理
  const handleLeave = () => {
    setMessage("ここをチェック");
  };

  return (
    // 標準的な JavaScript のイベント属性（onMouseEnterなど）に準じます
    <p onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {message}
    </p>
  );
}