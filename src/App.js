import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";

//pages
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, {careersLoader} from "./pages/Careers";
import CareerDetails, {careerDetailsLoader} from "./pages/CareerDetails";

//layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";
import CareerError from "./pages/CareerError";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='help' element={<HelpLayout/>}>
                <Route path='faq' element={<Faq />}/>
                <Route path='contact' element={<Contact />} />
            </Route>
            <Route path='careers' errorElement={<CareerError />} element={<CareersLayout/>}>
                <Route index element={<Careers />} loader={careersLoader}/>
                <Route loader={careerDetailsLoader} path=':id' element={<CareerDetails/>}/>
            </Route>
            <Route path='*' element={<NotFound />} />
        </Route>
    )
)

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}
export default App;