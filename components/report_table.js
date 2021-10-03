import { hours } from '../data'

export default function ReportTable(props){
  
  function get_totals(){
    for (var i = 0; i < hours.length; i++) {
      var hour_total = 0;
      for (var j = 0; j < props.reports.length; j++) {
        var this_hour = props.reports[j].hourly_sales[i]
        hour_total = hour_total + this_hour
        return <td>{hour_total}</td>
      }
    }
  }

  return(
    <table className="mx-auto w-1/2">
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
              {props.reports.map(item => {
                let store_total = 0;
                return (
                  <tr className="odd:bg-green-400 even:bg-green-200">
                    <td>{item.location}</td>

                    {item.hourly_sales.map(hour_sales => {
                      store_total += hour_sales
                      return <td>{hour_sales}</td>;
                    })}
                    <td>{store_total}</td>
                  </tr>
                )
              })}
              
            </tbody>
            <tfoot className="bg-green-500">
              <td>Totals</td>
              {hours.map(hour => {
                return get_totals()
              })}
              
            </tfoot>
          </table>
  )
}