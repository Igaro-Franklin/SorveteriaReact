import React from "react";
import { Link } from "react-router-dom";
import './header.css'

function Header(){
    return(
        <div>
            <header className="container-header">
                <nav>
                    <h1>LOGO</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/picoles">Picolés</Link></li>
                        <li><Link to="/sorvetes">Sorvetes</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;