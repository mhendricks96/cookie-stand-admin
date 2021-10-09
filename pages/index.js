
import CookieStandAdmin from '../components/cookie_stand_admin'
import { useState } from 'react'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

export default function Home() {

  
  const { user, login, logout } = useAuth();
  const { resources, loading, createResource } = useResource();
  // const user = {username: "michael"}
  // const user = null

  const [reports, setCookieStands] = useState([])


  function handleSubmit(event) {
    event.preventDefault();
    const cookieStand = {
      loaction: event.target.location.value,
      minimum_customers_per_hour: parseInt(event.target.minimum_customers_per_hour.value),
      maximum_customers_per_hour: parseInt(event.target.maximum_customers_per_hour.value),
      average_cookies_per_sale: parseFloat(event.target.average_cookies_per_sale.value),
    }

    createResource(cookieStand);
    event.target.reset();
    setCookieStands([...reports, cookieStand]);


  }



  return (
    <div className="bg-green-50">
      { user ? 
      <div>
        <CookieStandAdmin handleSubmit = {handleSubmit} reports={reports} stands={ resources } loading={ loading} onCreate={ createResource } />
        <button onClick={ logout } className="p-2 text-white bg-gray-500 rounded">Logout</button> 
      </div> :
      <div>
        <h1>Please Log In </h1>
        <button onClick= {() => login(process.env.NEXT_PUBLIC_USERNAME, process.env.NEXT_PUBLIC_PASSWORD)} className="p-2 text-white bg-gray-500 rounded">Login</button>
      </div> }
    </div>
  )
}
