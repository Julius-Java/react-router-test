import { useLoaderData, } from "react-router-dom"
import "../../sass/CareerDetail.scss"

export default function CareerDetails() {
    const career = useLoaderData()

    const {title, salary, location} = career;

    return (
        <div className="careerDetails">
            <h2>Career Details for {title}</h2>
            <p>Starting salary: {salary}</p>
            <p>Location: {location}</p>

            <div className="details">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptate explicabo hic sequi quas, id commodi deserunt culpa alias modi maxime incidunt vel suscipit similique distinctio recusandae voluptates repellat odit.</p>
            </div>
        </div>
    )
}
