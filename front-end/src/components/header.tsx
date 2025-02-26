import { NavLink } from "react-router-dom";

const Header = () => {
    return (  
        <div className="header">
            <header>
                <h4>Gringotts</h4>
                <nav>
                    <NavLink to="/" className="active">Home</NavLink>
                    <NavLink to="/clients">Clients</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/faq">FAQ</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                </nav>
            </header>
        </div>
    );
}
 
export default Header;