export default function Button({ children }) {
  return (
    <button style={{ padding: "8px 16px", background: "#333", color: "#fff" }}>
      {children}
    </button>
  );
}
