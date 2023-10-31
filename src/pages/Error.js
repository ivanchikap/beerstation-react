import {useRouteError} from 'react-router-dom'

const Error = () => {
    let error = useRouteError();
    return (
        <div className='error'>
            <div className="container">
                <h3 className='error__title'>Сталася помилка!</h3>
                <p className='error__text'>Упс, щось трапилось. Помилка: <span className='error__value'>{error.message || error.statusText}</span> </p>
            </div>
        </div>
    );
};

export default Error;