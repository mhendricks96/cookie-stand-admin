import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Main from '../components/main'

export default function Home() {

  const [reports, setCookieStands] = useState([])

  function onCreate(event) {
    event.preventDefault();

    const cookieStand = {
      location: event.target.location.value,
      minCustomers: event.target.min_per_hour.value,
      maxCustomers: event.target.max_per_hour.value,
      avgCookies: event.target.cookies_per_sale.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
      id: reports.length + 1
    }
    
    setCookieStands([...reports, cookieStand]);
  }

  return (
    <div className="bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main onCreate={onCreate} reports={reports}/>
      <Footer reports={reports}/>
    </div>
  )
}
