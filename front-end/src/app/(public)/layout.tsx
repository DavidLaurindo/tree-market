export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <h1>Login Tree - Market</h1>
        <hr />
        {children}</body>
    </html>
  )
}
