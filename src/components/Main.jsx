import React from "react";


export default function Main(){

    return(
        <main>
            <div>
                <img src="/images/imghomepage.png" alt="casahomepage"/>
                <div class="searchbar">
                    <form>
                        <input type="text" placeholder="" name="search"/>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </main>
    );
}