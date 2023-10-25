import {NavLink, Outlet} from "react-router-dom";

const HelpLayout = () => {
    return (
        <div className='help-layout'>
            <h2>Website help</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sunt.</p>

            <nav>
                <NavLink to='faq'>View hte faq</NavLink>
                <NavLink to='contact'>Contact Us</NavLink>
            </nav>

            <Outlet/>

        </div>
    )
}

export default HelpLayout;