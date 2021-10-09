
export default function Footer(props) {
  return(
    <div>
      <footer className="p-4 bg-green-500 mt-8">
        
        <DisplayTotal stands={ props.stands } loading={ props.loading }/>
      </footer>
    </div>
  )
}

function DisplayTotal(props) {
  if (props.loading){
    return <p>Loading...</p>
  }

  return <p>{props.stands.length} Locations World Wide</p>
}