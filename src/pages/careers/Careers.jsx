import { useLoaderData, Link } from "react-router-dom"
import "../../sass/Careers.scss"

function Careers() {
    const careers = useLoaderData()

    return (
    <div className="careers">
        {careers.map(career => {
            const {id, title, location} = career
            return (
            <Link to={id.toString()} key={id}>
                <p>{title}</p>
                <p>Based in {location}</p>
            </Link>
            )
        })}
    </div>
    )
}

export default Careers;