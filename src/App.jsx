/* eslint-disable no-unused-vars */
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";

// Pages imports
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import Careers from "./pages/careers/Careers";
import CareerDetails from "./pages/careers/CareerDetails";
import CareerError from "./pages/careers/CareerError";
import NotFound from "./pages/NotFound";

// Layout imports
import RootLayout from "./routeLayouts/RootLayout";
import HelpLayout from "./routeLayouts/HelpLayout";
import CareersLayout from "./routeLayouts/CareersLayout";

// Loader import
import loadCareers from "./utils/careerLoader";
import loadCareerDetails from "./utils/careerDetailsLoader";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareerError />}>
        <Route
          index
          element={<Careers />}
          loader={loadCareers}
        />

        <Route
          path=":id"
          element={<CareerDetails />}
          loader={loadCareerDetails}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App
