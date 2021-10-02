
export default function Main(props) {
  return (
    <div>
      <main>
      <form onSubmit={props.createStandHandler} className="bg-green-200 p-8 w-9/12 rounded-md items-center mx-auto">
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
          {props.cookieStands.length > 0 ?
          <table className="mx-auto w-1/2">
            <thead>
              <tr>
                <th>Stand No.</th>
                <th> Location </th>
                <th> minCustomers </th>
                <th> maxCustomers </th>
                <th> avgCookies </th>
              </tr>
            </thead>
            <tbody>
              {props.cookieStands.map(item => {
                return (
                  <tr className="odd:bg-green-500 even:bg-green-200">
                    <td>{item.id}</td>
                    <td>{item.location}</td>
                    <td>{item.minCustomers}</td>
                    <td>{item.maxCustomers}</td>
                    <td>{item.avgCookies}</td>
                  </tr>
                )
              })}
              
            </tbody>
          </table>: <p>Report Table Coming Soon...</p>}
        </div>
      </main>
    </div>
  )
}