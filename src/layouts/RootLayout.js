import {NavLink, Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Totop from "../components/Totop";
import {useEffect, useState} from "react";
import CategoriesItem from "../components/CategoriesItem";

const RootLayout = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const productTypesAll = products.map(prod => prod.type);
    const [...prodTypes] = new Set(productTypesAll);
    const alcohol = products.filter((product) => product.type === "alcohol");
    const ba = products.filter((product) => product.type === "ba");
    const appetizer = products.filter((product) => product.type === "appetizer");
    const souvenirs = products.filter((product) => product.type === "souvenirs");

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        localStorage.setItem('alcohol', JSON.stringify(alcohol))
    }, [alcohol])

    useEffect(() => {
        localStorage.setItem('ba', JSON.stringify(ba))
    }, [ba])

    useEffect(() => {
        localStorage.setItem('appetizer', JSON.stringify(appetizer))
    }, [appetizer])

    useEffect(() => {
        localStorage.setItem('souvenirs', JSON.stringify(souvenirs))
    }, [souvenirs])

    const getProducts = () => {
        setLoading(true);
        fetch(`http://localhost:4000/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                localStorage.setItem('products', JSON.stringify(data));
            })
            .catch(err => setError(true))
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <Header/>

            <main>
                {loading && <p>Loading ....</p>}
                <div className="section section--nopading">
                    <div className="container">
                        <nav className="categories">
                            {prodTypes?.length > 0 && (
                                prodTypes.map((type) => <CategoriesItem key={type} type={type} />)
                            )}
                            <div className="categories__item categories__item--discount">
                                <NavLink to='discounts' data-tab="souvenirs" className="cat-card-discount">
                                    <p className="cat-card-discount__text">Наявні акціїйна пропозиції</p>
                                    <div className="cat-card-discount__bottom">
                                        <h3>Зверніть увагу!</h3>
                                    </div>
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                </div>

                <Outlet/>

            </main>

            <Footer/>

            <Totop/>

        </>
    )
}

export default RootLayout