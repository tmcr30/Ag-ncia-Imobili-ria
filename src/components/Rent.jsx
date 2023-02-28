import { useEffect, useState } from "react";

export default function Rent() {


    const [properties, setProperties] = useState([]);


    useEffect(() => {

        fetch("/api/rent.json")
        .then( response => response.json() )
        .then( data => setProperties(data) );

    }, []);

    return (
        <main id="properties">
            {
                properties.map( (category, categoryIndex) => (
                    <section key={ categoryIndex }>
                        <div className="propertyClass"><h2>{ category.category }</h2></div>
                        <div className="listing">
                        {
                            category.properties.map(
                                (property, propertyIndex) => (
                                    <div key={ propertyIndex }>   
                                        <div className="cards-properties">
                                            <div className="flip-card">
                                                <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <img className="imageProperties" src={ property.image } alt=""/>
                                                </div>
                                                <div className="flip-card-back">
                                                    <h3>{ property.name }</h3>
                                                    <ul>
                                                    {
                                                        property.details.map(
                                                            (detail, index) => (
                                                                <li key={index}>{ detail }</li>
                                                            )
                                                        )
                                                    }
                                                    </ul>
                                                    <p>{property.price}€/mês</p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }
                        </div>
                    </section>
                ))
            }
        </main>
    );
}