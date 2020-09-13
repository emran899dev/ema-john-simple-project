import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div className="header">
            <img src={logo} alt=""/>
            
            <nav>
                {/* system-1 */}
                {/* <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a> */}   

                {/* system-2 */}
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <button onClick={() => setLoggedInUser({})}>Sign Out</button>

               
            </nav>
        </div>
    );
};

export default Header;