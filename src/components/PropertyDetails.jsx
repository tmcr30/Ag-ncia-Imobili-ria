import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function PropertyDetails({ id, name, price, location, rooms, wc, imageUrl }) {

  const images = imageUrl.map((imageUrl) => ({
    original: imageUrl,
    thumbnail: imageUrl,
  }));

  return (
    <div className='cardPropertyDetails'>
      <div className='detailsText'>
        <h2>{name}</h2>
        <p>Location: {location}</p>
        <p>{rooms}</p>
        <p>{wc}</p>
        <p>Price: {price}€</p>
        <a href="/">Voltar</a>
      </div>
      <ImageGallery items={images} />
    </div>  
  
  );
}