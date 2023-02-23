
export default function PropertyDetails({ id, name, price, location, imageUrl }) {

  
  return (
    <div className='cardPropertyDetails'>
      <h2>{name}</h2>
      <p>Location: {location}</p>
      <p>Price: {price}€</p>
      <img src={imageUrl} alt={name} />
      <a href="/"><button>Voltar</button></a>
    </div>

  );
}