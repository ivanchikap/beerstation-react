import {useRouteError} from 'react-router-dom'

const Error = () => {
    let error = useRouteError();
    console.error(error.message);
    return (
        <div className='error'>
            <h3 className='error__title'>Сталася помилка!</h3>
            <p className='error__text'>Упс, щось трапилось. Помилка: <span className='error__value'>{error.message}</span> </p>
        </div>
    );
};

export default Error;