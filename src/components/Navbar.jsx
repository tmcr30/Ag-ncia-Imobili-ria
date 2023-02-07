import React from "react";
import logo from "../components/logo.png";


export default function Navbar(){

    return(
        <nav>
            <div>
                <h1><img src={logo} alt="logo"/>Casas, Casinhas e Casarões</h1> 
            </div>
            <div>
                <ul>
                    <li><a href="/">Comprar</a></li>
                    <li><a href="/">Arrendar</a></li>
                    <li><a href="/">Vender</a></li>
                    <li><a href="/">Contactos</a></li>
                    <li className="login"><a href="/">Login</a></li>
                </ul>
            </div>    
        </nav>
    );
}