import { useRouteError, Link } from "react-router-dom"

function CareerError() {
    const error = useRouteError()
  return (
    <div className="careerError">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/" >Back to Homepage</Link>
    </div>
  )
}

export default CareerError