import {Link, useRouteError} from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/24/solid'

const Error = () => {
    let error = useRouteError();
    return (
        <div className='error'>
            <div className="container">
                <h3 className='error__title'>Сталася помилка!</h3>
                <p className='error__text'>Упс, щось трапилось. Помилка: <span className='error__value'>{error.message || error.statusText}</span> </p>
                <Link className='link' to='/'>
                   <HomeIcon width={20}/>
                    <span>Перейдіть на домашню сторінку.</span>
                </Link>
            </div>
        </div>
    );
};

export default Error;