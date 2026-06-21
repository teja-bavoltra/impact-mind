export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ padding: 20, fontFamily: "sans-serif" }}>
        <h2>Bavoltra Frontend — Environment Test</h2>
        <hr />
        {children}
      </body>
    </html>
  );
}
