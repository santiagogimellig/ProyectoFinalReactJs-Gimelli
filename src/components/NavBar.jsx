import { Link } from 'react-router-dom';
import { CartWidget } from '../components/CartWidget'
import "./NavBar.css"

export function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                {/* <Link to='/'> */}
                    <img
                        src='https://seeklogo.com/images/S/slingshot-kite-surfing-logo-6D45055CF0-seeklogo.com.png'
                        alt='Logo'
                    />
                {/* </Link> */}
            </div>
            <div className="navbar-links">
                <Link className="menu-link" to="/"> Inicio </Link>
                <Link className="menu-link" to="/category/Hibrida"> Hibrida </Link>
                <Link className="menu-link" to="/category/Park"> Park </Link>
                <Link className="menu-link" to="/category/Wind"> Wind </Link>
                <Link className="menu-link" to="/category/Lancha"> Lancha </Link>
            </div>
            <div className="navbar-cart">
                <CartWidget items={1} />
            </div>
        </nav>
    );
}

export default NavBar;