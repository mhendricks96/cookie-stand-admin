import Link from 'next/link'

export default function AboutUs(){
  return(
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <h1 className="text-5xl pb-16">Overview - Coming Soon</h1>
      <Link href="/">
        <a >Home Page</a>
      </Link>
    </div>
  )
}