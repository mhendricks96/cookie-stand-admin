import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Main from '../components/main'

export default function Home() {

  const [cookieStands, setCookieStands] = useState([])

  function createStandHandler(event) {
    event.preventDefault();

    const cookieStand = {
      location: event.target.location.value,
      minCustomers: event.target.min_per_hour.value,
      maxCustomers: event.target.max_per_hour.value,
      avgCookies: event.target.cookies_per_sale.value,
      id: cookieStands.length + 1
    }
    
    setCookieStands([...cookieStands, cookieStand]);
  }
  //console.log('cookieStand', cookieStands);

  return (
    <div className="bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main createStandHandler={createStandHandler} cookieStands={cookieStands}/>
      <Footer />
    </div>
  )
}
