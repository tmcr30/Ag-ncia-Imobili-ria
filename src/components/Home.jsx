export default function Home(){
    return(
        <main>
            <div className="findHome">
                <h2>Encontre aqui o seu novo lar</h2>
            </div>
            <div>
                <div className="searchbar">
                    <form>
                        <input type="text" placeholder="Pesquisar por local" name="search"/>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        <div className="cards">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="casa1" src="/images/Casa1.png" alt="Casa1"/>
                    </div>
                    <div className="flip-card-back">
                        <h3>Moradia T4</h3>
                        <p>450.000€</p>
                        <p>Sintra</p>
                    </div>
                </div>
            </div>
         <div className="flip-card">
             <div className="flip-card-inner">
                 <div className="flip-card-front">
                     <img className="casa2" src="/images/casa2.png" alt="Casa2"/>
                 </div>
                 <div className="flip-card-back">
                     <h3>Apartamento T3</h3>
                     <p>350.000€</p>
                     <p>Estoril</p>
                 </div>
             </div>
         </div>
         <div className="flip-card">
             <div className="flip-card-inner">
                 <div className="flip-card-front">
                     <img className="casa3" src="/images/casa3.png" alt="Casa3"/>
                 </div>
                 <div className="flip-card-back">
                     <h3>Moradia T2</h3>
                     <p>250.000€</p>
                     <p>Algueirão-Mem Martins</p>
                 </div>
             </div>
         </div>
         <div className="flip-card">
             <div className="flip-card-inner">
                 <div className="flip-card-front">
                     <img className="casa4" src="/images/casa4.png" alt="casa4"/>
                 </div>
                 <div className="flip-card-back">
                     <h3>Apartamento T2</h3>
                     <p>180.000€</p>
                     <p>Agualva-Cacém</p>
                 </div>
             </div>
         </div>
     </div>  
        </main>
         
    
    );
}