import LayoutPractice from "./pages/LayoutPractice.jsx";

export default function App() {
  const mode = "practice"; // "normal" に戻すと元の表示に戻る

  if (mode === "practice") return <LayoutPractice />;

  return (
    <div>
      {/* ここに元のAppの中身 */}
    </div>
  );
}
