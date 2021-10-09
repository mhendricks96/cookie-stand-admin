import useResource from '../hooks/useResource'

export default function CreateForm(props){
  return(
    <div>
    
        <StandCreateForm onCreate={props.onCreate} stands={ props.stands } loading={ props.loading } handleSubmit = {props.handleSubmit}/>
        </div>
  )
}


function StandCreateForm( props ) {
      return (
        <form onSubmit={ props.handleSubmit } className="bg-green-200 p-8 w-9/12 rounded-md items-center mx-auto" >
          <h3 className="text-center pb-2">Create Cookie Stand</h3>
          <ul>
            <li><label className="text-xs w-full">Location<input name="location" className="flex-auto w-5/6"/></label></li>
            <li className="p-4">
              <ul className="inline-block p-2">
                <li>
                  <label className="text-xs">Minimum Customers per Hour</label>
                </li>
                <li>
                  <input name="minimum_customers_per_hour"/>
                </li>
              </ul>
              <ul className="inline-block p-2">
                <li>
                  <label className="text-xs">Maximum Customers per Hour</label>
                </li>
                <li>
                  <input name="maximum_customers_per_hour"/>
                </li>
              </ul>
              <ul className="inline-block p-2">
                <li>
                  <label className="text-xs">Average Cookies per Sale</label>
                </li>
                <li>
                  <input name="average_cookies_per_sale"/>
                </li>
              </ul>

              <button className="px-2 py-01 bg-green-500 w-24 h-10">Create</button>
            </li>
          </ul>
        </form>
      )
}