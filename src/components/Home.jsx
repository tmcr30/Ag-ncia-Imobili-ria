import { useState } from 'react';
import PropertyDetails from './PropertyDetails';

export default function Home() {
 
  const properties = [
    {
      id: 1,
      name: 'Moradia T4',
      price: "750.000",
      location: 'Sintra',
      imageUrl: '/images/moradia2.1.jpg'
    },
    {
      id: 2,
      name: 'Moradia T2',
      price: "250.000",
      location: 'Algueirão-Mem Martins',
      imageUrl: '/images/moradia1.2.jpg'
    },
    {
      id: 3,
      name: 'Apartamento T3',
      price: "350.000",
      location: 'Lisboa',
      imageUrl: '/images/apartamento.jpg'
    },
    {
      id: 4,
      name: 'Apartamento T2',
      price: "180.000",
      location: 'Agualva-Cacém',
      imageUrl: '/images/apartamento1.jpg'
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredProperties = properties.filter(property =>
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleQueryChange(event) {
    setSearchQuery(event.target.value);
  }

  const [selectedProperty, setSelectedProperty] = useState(null);

  function handleCardClick(property) {
    setSelectedProperty(property);
  }

  
  return (
    <main id="properties">
      <div className="findHome">
        <h2>Encontre aqui o seu novo lar</h2>
      </div>
      <div>
        <div className="searchbar">
          <form className="searchbarHome">
            <input
              type="text"
              placeholder="Pesquisar por local"
              name="search"
              value={searchQuery}
              onChange={handleQueryChange}
            />
          </form>
        </div>
      </div>
      <div className="cards">
      {selectedProperty ? (
        <PropertyDetails {...selectedProperty} />
      ) : (
        filteredProperties.length > 0
          ? filteredProperties.map((property) => (
              <div className="flip-card" key={property.id} onClick={() => handleCardClick(property)}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className="casa1" src={property.imageUrl} alt={property.name} />
                  </div>
                  <div className="flip-card-back">
                    <h3>{property.name}</h3>
                    <p>{property.location}</p>
                    <p>{property.price}€</p>
                  </div>
                </div>
              </div>
            ))
          : properties.map((property) => (
              <div className="flip-card" key={property.id} onClick={() => handleCardClick(property)}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className="casa1" src={property.imageUrl} alt={property.name} />
                  </div>
                  <div className="flip-card-back">
                    <h3>{property.name}</h3>
                    <p>{property.location}</p>
                    <p>{property.price}€</p>
                  </div>
                </div>
              </div>
            ))
      )}
      </div>
    </main>
  );
}