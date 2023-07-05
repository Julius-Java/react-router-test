import { Outlet } from "react-router-dom"


function CareersLayout() {
  return (
    <div className="careersLayout">
      <h2>Careers</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iure.</p>

      <Outlet />
    </div>
  )
}

export default CareersLayout