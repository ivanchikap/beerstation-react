import {NavLink, Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Totop from "../components/Totop";

const RootLayout = () => {
    return (
        <div>
           <Header />
            <main>
                <div className="section section--nopading">
                    <div className="container">
                        <nav className="categories">
                            <div className="categories__item">
                                <NavLink to='beer' data-tab="beer" className="cat-card js-tab">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M352,256H313.39c-15.71-13.44-35.46-23.07-57.39-28V180.44l-32-3.38-32,3.38V228c-21.93,5-41.68,14.6-57.39,28H16A16,16,0,0,0,0,272v96a16,16,0,0,0,16,16h92.79C129.38,421.73,173,448,224,448s94.62-26.27,115.21-64H352a32,32,0,0,1,32,32,32,32,0,0,0,32,32h64a32,32,0,0,0,32-32A160,160,0,0,0,352,256ZM81.59,159.91l142.41-15,142.41,15c9.42,1,17.59-6.81,17.59-16.8V112.89c0-10-8.17-17.8-17.59-16.81L256,107.74V80a16,16,0,0,0-16-16H208a16,16,0,0,0-16,16v27.74L81.59,96.08C72.17,95.09,64,102.9,64,112.89v30.22C64,153.1,72.17,160.91,81.59,159.91Z"/>
                                    </svg>
                                    <div className="cat-card__bottom">
                                        <h3>Сьогодні на кранах</h3>
                                    </div>
                                </NavLink>
                            </div>
                            <div  className="categories__item">
                                <NavLink to='ba' data-tab="ba" className="cat-card js-tab">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path d="M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z"/>
                                    </svg>
                                    <div className="cat-card__bottom">
                                        <h3>Б/А пиво та соки</h3>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="categories__item">
                                <NavLink to='appetizer' data-tab="appetizer" className="cat-card js-tab">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
                                    </svg>
                                    <div className="cat-card__bottom">
                                        <h3>Смаколики</h3>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="categories__item">
                                <NavLink to='souvenirs' data-tab="souvenirs" className="cat-card js-tab">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z"/>
                                    </svg>
                                    <div className="cat-card__bottom">
                                        <h3>Сувеніри</h3>
                                    </div>
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                </div>

                <Outlet/>
            </main>
            <Footer />

            <Totop />
        </div>
    )
}

export default RootLayout