import { NavLink } from "react-router-dom";

export default function Navbar(){

    return(
        <nav>
            <div>
                <h1><img src="/images/logo.png" alt="logo"/>Casas, Casinhas e Casarões</h1>
            </div>
            <div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Properties">Comprar</NavLink></li>
                    <li><NavLink to="/Rent">Arrendar</NavLink></li>
                    <li><NavLink to="/Sell">Vender</NavLink></li>
                    <li><NavLink to="/Contacts">Contactos</NavLink></li>
                    <li className="login"><NavLink to="/login">Login</NavLink></li>
                </ul>
            </div> 
        </nav>
    );
}