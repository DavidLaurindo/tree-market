import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <h1>Sistema</h1>
        <nav>
          <ul>
            <li> <Link href="/" >Home</Link></li>
          </ul>
          <ul>
            <li> <Link href="/users" >Contact</Link></li>
          </ul>
          <ul>
            <li> <Link href="/login" >Login</Link></li>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  )
}
