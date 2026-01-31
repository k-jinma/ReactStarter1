export default function MyFrame({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      {children}
    </div>
  );
}