import { useEffect, useState } from "react";

export default function Properties() {


    const [properties, setProperties] = useState([]);


    useEffect(() => {

        fetch("/api/properties.json")
        .then( response => response.json() )
        .then( data => setProperties(data) );

    }, []);

    return (
        <main id="properties">
            {
                properties.map( category => (
                    <section className="propertyClass" key={ category.category_id }>
                        <h2>{ category.category }</h2>
                        <div className="listing">
                        {
                            category.properties.map(
                                property => (
                                    <div key={ property.properties_id }>   
                                        <div className="cards">
                                            <div class="flip-card">
                                                <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img className="imageProperties" src={ property.image } alt=""/>
                                                </div>
                                                <div class="flip-card-back">
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
                                                    <p>{property.price}€</p>
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