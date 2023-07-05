import { Outlet, NavLink } from "react-router-dom";
import "../sass/Help.scss"

export default function HelpLayout() {
  return (
    <div className="helpLayout">
        <h2>Website Help</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, sequi.</p>

        <nav>
          <NavLink to="faq">Visit Faq</NavLink>
          <NavLink to="contact">Contact form</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}
