import CreateForm from '../components/create_form'
import ReportTable from '../components/report_table'

export default function Main(props) {
  return (
    <div>
      <main>
      <CreateForm onCreate={props.onCreate}/>
        <div className="text-center mt-7">
          {props.reports.length > 0 ?
          <ReportTable reports={props.reports}/> : 
          <h2>No Cookie Stands Available</h2>}
        </div>
      </main>
    </div>
  )
}