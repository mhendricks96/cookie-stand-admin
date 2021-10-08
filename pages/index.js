
import CookieStandAdmin from '../components/cookie_stand_admin'
import { useState } from 'react'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

export default function Home() {

  
  const { user, login, logout } = useAuth();
  const { resources, loading } = useResource();
  // const user = {username: "michael"}
  // const user = null

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
      { user ? 
      <div>
        <CookieStandAdmin onCreate={onCreate} reports={reports} />
        <StandList stands={ resources } loading={ loading } />
        <button onClick={ logout } className="p-2 text-white bg-gray-500 rounded">Logout</button> 
      </div> :
      <div>
        <h1>Please Log In </h1>
        <button onClick= {() => login(process.env.NEXT_PUBLIC_USERNAME, process.env.NEXT_PUBLIC_PASSWORD)} className="p-2 text-white bg-gray-500 rounded">Login</button>
      </div> }
    </div>
  )
}


function StandList({stands, loading }){
  if (loading){
    return <p>Loading...</p>
  }

  return <ul>
    {stands.map(stand => (
      <li key={stand.id}>{stand.location}</li>
    ))}
  </ul>
}