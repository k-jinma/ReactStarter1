import { useState, useEffect } from "react";

export default function GoodTimer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // クリーンアップ
  }, []); // マウント時に一度だけ登録

  return <div>現在のカウント：{count}</div>;
}