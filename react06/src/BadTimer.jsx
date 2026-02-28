import { useState } from "react";

export default function BadTimer() {
  const [count, setCount] = useState(10);

  // ❌ useEffect なし：レンダリングのたびに setInterval が増殖する
  setInterval(() => {
    setCount((prev) => prev - 1);
  }, 1000);

  return <div>現在のカウント：{count}</div>;
}