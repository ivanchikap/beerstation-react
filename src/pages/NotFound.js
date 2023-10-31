import {Link} from "react-router-dom";

const NotFound = () => (
    <div className='error'>
        <div className="container">
            <h3 className='error__title'>Сторінка не знайдена!</h3>
            <p className='error__text'>Сторінки з таким URL не існує.</p>
            <Link className='error__link' to='/'>Перейдіть на домашню сторінку.</Link>
        </div>
    </div>
)

export default NotFound;