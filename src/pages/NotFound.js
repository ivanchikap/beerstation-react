import {Link} from "react-router-dom";

const NotFound = () => (
    <div className='notfound'>
        <h3>Page not found!</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi beatae consectetur corporis culpa delectus dolor dolore est expedita fugiat ipsum labore minima minus necessitatibus, soluta suscipit unde ut voluptatum?</p>
        <Link to='/'>Go Home</Link>
    </div>
)

export default NotFound;