
export default function Footer(props) {
  return(
    <div>
      <footer className="p-4 bg-green-500 mt-8">
        <p>{props.reports.length} Locations World Wide</p>
      </footer>
    </div>
  )
}