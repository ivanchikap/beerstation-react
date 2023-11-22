import {NavLink, Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Totop from "../components/Totop";
import {useEffect, useMemo, useState} from "react";
import CategoriesItem from "../components/CategoriesItem";
import Error from "../pages/Error";
import Spinner from "../components/Spinner";
import {fetchInfo} from "../helpers/fetchInfo";

const RootLayout = () => {
    const [products, setProducts] = useState([]);
    const [info, setInfo] = useState({});
    const {phoneHref, phone} = info;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    let prodTypes = [];
    let alcohol = useMemo(() => [], []);
    let ba = useMemo(() => [], []);
    let appetizer = useMemo(() => [], []);
    let souvenirs = useMemo(() => [], []);
    let discountedProducts = useMemo(() => [], []);

    if (products.length > 0) {
        const productTypesAll = products.map(prod => prod.type);
        [...prodTypes] = new Set(productTypesAll);
        alcohol = products.filter((product) => product.type === "alcohol");
        ba = products.filter((product) => product.type === "ba");
        appetizer = products.filter((product) => product.type === "appetizer");
        souvenirs = products.filter((product) => product.type === "souvenirs");
        discountedProducts = products.filter((product) => product.discount);
    }

    useEffect(() => {
        getProducts();
        fetchInfo().then(res => setInfo(res));
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

    useEffect(() => {
        localStorage.setItem('discounted', JSON.stringify(discountedProducts))
    }, [discountedProducts])

    const getProducts = () => {
        setLoading(true);
        try {
            fetch(`http://localhost:4000/products`)
                .then(res => {
                    if (!res.ok) {
                        setError(`Network response was not ok: ${res.status} ${res.statusText}`);
                    }
                    return res.json()
                })
                .then(data => {
                    setProducts(data);
                    localStorage.setItem('products', JSON.stringify(data));
                })
                .catch(err => setError(err))
                .finally(() => {
                    setLoading(false)
                })
        } catch (e) {
            console.log(e);
            setError(e)
        }
    }

    const sectionStyle = discountedProducts.length > 0 ? "section section--nopading mt-6" : "section section--nopading";

    return (
        <>
            <Header info={info}/>

            <main>
                {error && <Error externalError={error}/>}
                {loading && !error && <Spinner/>}
                <div className={sectionStyle}>
                    <div className="container">
                        {!error && !loading && products.length > 0 && (<nav className="categories">
                            {prodTypes && prodTypes?.length > 0 && (
                                prodTypes?.map((type) => <CategoriesItem key={type} type={type}/>)
                            )}
                            {discountedProducts.length > 0 && (
                                <NavLink to='discounts' className="cat-card-discount">
                                    <p className="cat-card-discount__text">Наявні акціїйні пропозиції</p>
                                    <div className="cat-card-discount__bottom">
                                        <h3>Зверніть увагу!</h3>
                                    </div>
                                </NavLink>
                            )}
                        </nav>)}
                    </div>
                </div>

                <Outlet/>

            </main>

            <Footer phoneHref={phoneHref} phone={phone}/>

            <Totop/>

        </>
    )
}

export default RootLayout