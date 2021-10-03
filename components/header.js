import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-green-500 text-black-100 text-3xl mb-8">
        <h1>Cookie Stand Admin</h1>
        <Link href="/overview">
          <a href="overview">Overview</a>       
        </Link>
      </header>
  )
}