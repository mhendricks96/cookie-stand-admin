import CreateForm from '../components/create_form'
import ReportTable from '../components/report_table'

export default function Main(props) {
  return (
    
    <main>
      <CreateForm onCreate={props.onCreate} reports={props.reports} stands={ props.stands } loading={ props.loading } handleSubmit = {props.handleSubmit} />
      <div className="text-center mt-7">
        <ReportTable reports={props.reports} stands={ props.stands } loading={ props.loading }/> : 
      </div>
    </main>
  
  )
}