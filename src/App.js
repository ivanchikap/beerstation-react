import React from 'react';
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";

//plugin
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//pages
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import ProductPage from "./pages/ProductPage";
import ProductModalPage from "./pages/ProductModalPage";

//layouts
import RootLayout from "./layouts/RootLayout";

//loader
import {loader} from "./helpers/loader";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>} errorElement={<Error/>}>
            <Route path='alcohol' element={<ProductPage type='alcohol'/>} loader={() => loader('alcohol')} errorElement={<Error/>}/>
            <Route path='appetizer' element={<ProductPage type='appetizer'/>} loader={() => loader('appetizer')} errorElement={<Error/>}/>
            <Route path='ba' element={<ProductPage type='ba'/>} loader={() => loader('ba')} errorElement={<Error/>}/>
            <Route path='souvenirs' element={<ProductPage type='souvenirs'/>} loader={() => loader('souvenirs')} errorElement={<Error/>}/>
            <Route path='discounts' element={<ProductPage type='discounts'/>} loader={() => loader('discounted')} errorElement={<Error/>}/>
            <Route path=':id' element={<ProductModalPage />}/>
            <Route path='*' element={<NotFound/>}/>
        </Route>
    )
)

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
            <ToastContainer />
        </div>
    );
}

export default App;