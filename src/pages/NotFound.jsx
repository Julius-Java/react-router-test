import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
        <h2>Page Not Found!</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione suscipit unde blanditiis nihil. Ea, odio!</p>

        <p>Go to <Link to="/">Homepage</Link>.</p>
    </div>
  )
}

export default NotFound