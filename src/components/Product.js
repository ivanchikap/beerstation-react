import React, {useEffect, useState} from "react";
import Modal from "./Modal";
import SiemaComponent from "./SiemaComponent";
import Badge from "./Badge";
const Product = ({prod}) => {
    const [modal, setModal] = useState(false);
    const maxAlcohol = 16;
    const maxBitterness = 40;
    const maxDensity = 40;

    const alcoholPercentage = Math.round((prod.alcohol / maxAlcohol) * 100) || 0;
    const alcoholStyle = {width: `${alcoholPercentage}%`};

    const bitternessPercentage = Math.round((prod.bitterness / maxBitterness) * 100) || 0;
    const bitternessStyle = {width: `${bitternessPercentage}%`};

    const densityPercentage = Math.round((prod.density / maxDensity) * 100) || 0;
    const densityStyle = {width: `${densityPercentage}%`};


    const testClass = prod.type !== 'alcohol' ? 'd-none' : 'card__testimonial';
    const cardMeteringClass = prod.metering ? '' : 'd-none';


    useEffect(() => {
        if (modal) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [modal])

    const descriptionTemplate = prod.desc.reduce((acc, paragraph) => {
        acc += `${paragraph}`
        return acc;
    }, '');

    const onProductClick = (e) => {
        e.preventDefault();

        if (!(e.target.classList.contains('js-img')
            || e.target.classList.contains('card__img')
            || e.target.classList.contains('card__title')
            || e.target.classList.contains('card__details')
        )) {
            return
        }

        setModal(true);
    }

    const onCloseClick = () => {
        setModal(false);
    }

    const closeHandler = () => {
        setModal(false);
    }

    return (
        <div className="main__col">
            <div onClick={onProductClick} data-name={prod.name} className="card" id={prod.name}>
                {!prod.isInShop && <Badge text='У дорозі' type='road'/>}
                <a className="card__img" href="#">
                    <img className="js-img" src={prod.imgPreview} alt={prod.title} />
                    <svg className="card__share-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                        <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"/>
                    </svg>
                </a>
                <div className="card__info">
                    <div className="card__main-info">
                        <div className="card__name">
                            <a className="card__title" href="#">{prod.title}</a>
                            <p className="card__beertype">{prod.subtitle}</p>
                        </div>
                        <div className={testClass}>
                            <div className="card__test-item">
                                <h6 className="card__test-title">Міцність</h6>
                                <p className="card__test-value">{prod.alcohol || '0'} %</p>
                                <div className="card__test-progress">
                                    <div style={alcoholStyle} className="card__test-progress-value"></div>
                                </div>
                            </div>
                            <div className="card__test-item">
                                <h6 className="card__test-title">Гіркота</h6>
                                <p className="card__test-value">{prod.bitterness || '0'} IBU</p>
                                <div className="card__test-progress">
                                    <div style={bitternessStyle} className="card__test-progress-value"></div>
                                </div>
                            </div>
                            <div className="card__test-item">
                                <h6 className="card__test-title">Щільність</h6>
                                <p className="card__test-value">{prod.density || '0'} %</p>
                                <div className="card__test-progress">
                                    <div style={densityStyle} className="card__test-progress-value"></div>
                                </div>
                            </div>
                        </div>
                        <div className="card__price-wrapper">
                            <div className="card__price">
                                <span>{prod.price}</span>
                                <span className={cardMeteringClass}>за {prod.metering || 0}</span>
                            </div>
                            <svg className="card__cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"/>
                            </svg>
                        </div>
                        <div className="card__bottom">
                            <a className="card__details" href="#">Детальніше...</a>
                        </div>
                    </div>
                </div>
            </div>
            {modal && <Modal close={() => closeHandler()}>
                <svg className="modal__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={onCloseClick}>
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
                </svg>
                <div className="modal__left">
                    <SiemaComponent images={prod?.modalImages} />
                </div>

                <div className="modal__right">
                    <h2 className="modal__title">{prod.title}</h2>
                    <h3 className="modal__beertype">{prod.subtitle}</h3>

                    <div className="modal__price-wrapper">
                        <div className="modal__price">
                            <span>{prod.price}</span>
                            <span className={cardMeteringClass}>за {prod.metering || 0}</span>
                        </div>
                        <button className="btn btn--default">Придбати</button>
                    </div>

                    <div className={testClass}>
                        <div className="card__test-item">
                            <h6 className="card__test-title">Міцність</h6>
                            <p className="card__test-value">{prod.alcohol || '0'} %</p>
                            <div className="card__test-progress">
                                <div style={alcoholStyle} className="card__test-progress-value"></div>
                            </div>
                        </div>
                        <div className="card__test-item">
                            <h6 className="card__test-title">Гіркота</h6>
                            <p className="card__test-value">{prod.bitterness || '0'} IBU</p>
                            <div className="card__test-progress">
                                <div style={bitternessStyle} className="card__test-progress-value"></div>
                            </div>
                        </div>
                        <div className="card__test-item">
                            <h6 className="card__test-title">Щільність</h6>
                            <p className="card__test-value">{prod.density || '0'} %</p>
                            <div className="card__test-progress">
                                <div style={densityStyle} className="card__test-progress-value"></div>
                            </div>
                        </div>
                    </div>
                    <div className="modal__description">
                        {descriptionTemplate}
                    </div>
                </div>
            </Modal>}
        </div>
    );
};

export default Product;