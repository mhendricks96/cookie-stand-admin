import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between p-4 bg-green-500 text-black-100 text-3xl mb-8">
        <h1>Cookie Stand Admin</h1>
        <a href="about_us">About Us</a>
      </header>
      <main>
      <form className="bg-green-200 p-8 w-9/12 rounded-md items-center mx-auto">
          <h3 className="text-center pb-2">Create Cookie Stand</h3>
          <ul>
            <li><label className="text-xs w-full">Location<input name="location" className="flex-auto w-5/6"/></label></li>
            <li className="p-4">
              <ul className="inline-block p-2">
                <li>
                  <label className="text-xs">Minimum Customers per Hour</label>
                </li>
                <li>
                  <input name="min_per_hour"/>
                </li>
              </ul>
              <ul className="inline-block p-2">
                <li>
                  <label className="text-xs">Maximum Customers per Hour</label>
                </li>
                <li>
                  <input name="max_per_hour"/>
                </li>
              </ul>
              <ul className="inline-block p-2">
                <li>
                  <label className="text-xs">Average Cookies per Sale</label>
                </li>
                <li>
                  <input name="cookies_per_sale"/>
                </li>
              </ul>

              <button className="px-2 py-01 bg-green-500 w-24 h-10">Create</button>
            </li>
          </ul>
        </form>
        <div className="text-center mt-7">
          <p>Report Table Coming Soon...</p>
          <table className="mx-auto w-1/2">
            <thead>
              <tr>
                <th> Location </th>
                <th> minCustomers </th>
                <th> maxCustomers </th>
                <th> avgCookies </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"portland"</td>
                <td>45</td>
                <td>8</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <footer className="p-4 bg-green-500 mt-8">
        <p>©2021</p>
      </footer>
    </div>
  )
}
