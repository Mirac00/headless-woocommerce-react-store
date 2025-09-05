import { useState } from 'react';
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = ({ cartItem, isAuthenticated, setUserLogout }) => {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-box">
                {/* Logo po lewej */}
                <Link to="/" className="logo-container" onClick={closeMobileMenu}>
                    <span className="navbar-brand">My Store</span>
                </Link>
                
                {/* Wypełniacz między logo a menu */}
                <div className='nav-filler'></div>
                
                {/* Przycisk menu mobilnego po prawej */}
                <div className={`menu-icon ${click ? 'active' : ''}`} onClick={handleClick}>
                    {click ? (
                        <i className="fas fa-times"></i>
                    ) : (
                        <i className="fas fa-bars"></i>
                    )}
                </div>
                
                {/* Menu */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link className="nav-link" to="/" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products" onClick={closeMobileMenu}>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart" onClick={closeMobileMenu}>
                            Cart <span className="badge pill bg-secondary">{cartItem.length}</span>
                        </Link>
                    </li>

                    {isAuthenticated ? (
                        <>
                            <li className="nav-item">
                                <Link to="/my-account" className="nav-link" onClick={closeMobileMenu}>My Account</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/my-orders" className="nav-link" onClick={closeMobileMenu}>My Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={() => {
                                    closeMobileMenu();
                                    setUserLogout();
                                }}>Logout</Link>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <Link to="/login" className="nav-link" onClick={closeMobileMenu}>Login/Signup</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;