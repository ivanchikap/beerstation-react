import {Link, useRouteError} from "react-router-dom";

const CareerError = () => {
    const error = useRouteError();
    return (
         <div className='career-error'>
             <h3>There is an error</h3>
             <p>Error message: {error.message} </p>
             <Link to='/'>Go back to the home page </Link>
         </div>
    )
}

export default CareerError;