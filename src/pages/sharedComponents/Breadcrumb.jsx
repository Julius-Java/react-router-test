import { useLocation, Link } from "react-router-dom"
import "../../sass/CrumbLinks.scss"

function Breadcrumb() {

    const location = useLocation()

    let currentLink = ''

    const crumbLists = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`
            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })

    return (
        <div className="breadCrumbs">{crumbLists}</div>
    )
}

export default Breadcrumb