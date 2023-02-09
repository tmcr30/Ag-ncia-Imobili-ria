import React from "react";
import imghomepage from "../components/imghomepage.png";

export default function Main(){

    return(
        <main>
            <div>
                <img src={imghomepage} alt="casahomepage"/>
                <div class="searchbar">
                    <form>
                        <input type="text" placeholder="" name="search"/>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="casa1" src="components/Casa1.png" alt="Casa1"/>
                    </div>
                    <div class="flip-card-back">
                        <h1>Moradia T4</h1>
                        <p>450.000€</p>
                        <p>Sintra</p>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="casa1" src="components/Casa1.png" alt="Casa2"/>
                    </div>
                    <div class="flip-card-back">
                        <h1>Apartamento T3</h1>
                        <p>350.000€</p>
                        <p>Estoril</p>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="casa1" src="components/Casa1.png" alt="Casa3"/>
                    </div>
                    <div class="flip-card-back">
                        <h1>Moradia T2</h1>
                        <p>250.000€</p>
                        <p>Algueirão-Mem Martins</p>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="casa1" src="components/Casa1.png" alt="Casa4"/>
                    </div>
                    <div class="flip-card-back">
                        <h1>Apartamento T2</h1>
                        <p>180.000€</p>
                        <p>Agualva-Cacém</p>
                    </div>
                </div>
            </div>
        </main>
    );
}