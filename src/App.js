import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";

//pages
import Home from "./pages/Home";
import Beer from "./pages/Beer";
import Appetizer from "./pages/Appetizer";
import Ba from "./pages/Ba";
import NotFound from "./pages/NotFound";

//layouts
import RootLayout from "./layouts/RootLayout";

//actions
import {headerGetInfo} from "./components/Header";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>} loader={headerGetInfo}>
            <Route index element={<Home/>}/>
            <Route path='beer' element={<Beer/>}/>
            <Route path='appetizer' element={<Appetizer/>}/>
            <Route path='ba' element={<Ba/>}/>
            <Route path='*' element={<NotFound/>}/>
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