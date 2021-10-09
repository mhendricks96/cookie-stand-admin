import { hours } from '../data'

export default function ReportTable(props){
  
  // function get_totals(){
  //   for (var i = 0; i < hours.length; i++) {
  //     var hour_total = 0;
  //     for (var j = 0; j < props.reports.length; j++) {
  //       var this_hour = props.reports[j].hourly_sales[i]
  //       hour_total = hour_total + this_hour
  //       return <td>{hour_total}</td>
  //     }
  //   }
  // }

  return(
    <div>
      <StandList stands={ props.stands } loading={ props.loading } />
    </div>
  )
}

function StandList(props){
  if (props.loading){
    return <p>Loading...</p>
  }

  return <table className="mx-auto w-1/2">
          <thead className="bg-green-500">
            <tr>
              <th>Location</th>
              {hours.map(hour => {
                return <th>{hour}</th>;
              })}
              <th>Totals</th>
            </tr>
          </thead>
          <tbody>
            {props.stands.map(stand => {
              let stand_total = 0;
              return (
                <tr className="odd:bg-green-400 even:bg-green-200">
                  <td>{stand.location}</td>

                  {stand.hourly_sales.map(hour_sales => {
                    stand_total += hour_sales
                    return <td>{hour_sales}</td>
                  })}
                  <td>{stand_total}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot className="bg-green-500">
              <td>Totals</td>
              {/* {hours.map(hour => {
                return get_totals()
              })} */}
          </tfoot>
  </table>
  
}