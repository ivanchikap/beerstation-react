import {Link} from "react-router-dom";
import logo from '../assets/img/logo.png';

const Header = ({info}) => {
    const {phoneHref, phone, address, googleMapsLink, timeStart, timeFinish, dns} = info;

    return (
        <header className="header" id="header">
            <div className="container--header">
                <div className="header__inner">
                    <Link to={dns} className="logo">
                        <img src={logo} alt="beer station logo"/>
                    </Link>
                    <div className="header__info">
                        <Link className="header__item" to={phoneHref}>
                            <svg className="header__icon" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512">
                                <path
                                    d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
                            </svg>
                            <span>{phone}</span>
                        </Link>
                        <Link className="header__item" target="_blank" to={googleMapsLink}>
                            <svg className="header__icon" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 384 512">
                                <path
                                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                            </svg>
                            <span>{address}</span>
                        </Link>
                    </div>
                    <div className="header__time">
                        <svg className="header__icon" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path
                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/>
                        </svg>
                        <span>{timeStart} - {timeFinish}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;