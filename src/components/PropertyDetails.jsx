import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function PropertyDetails({ id, name, price, location, imageUrl }) {

  const images = imageUrl.map((imageUrl) => ({
    original: imageUrl,
    thumbnail: imageUrl,
  }));

  return (
    <div className='cardPropertyDetails'>
      <h2>{name}</h2>
      <p>Location: {location}</p>
      <p>Price: {price}€</p>
      <ImageGallery items={images} />
      <a href="/"><button>Voltar</button></a>
    </div>
  );
}