// import Head from 'next/head'
// import Link from 'next/link'
// import Footer from '../components/footer'
// import Header from '../components/header'
// import Main from '../components/main'
import CookieStandAdmin from '../components/cookie_stand_admin'
import { useState } from 'react'

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
      <CookieStandAdmin onCreate={onCreate} reports={reports} reports={reports}/>
    </div>
  )
}
