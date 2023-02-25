import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`/api/properties/${id}.json`)
      .then((response) => response.json())
      .then((data) => setProperty(data));
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  const images = property.gallery.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <div>
      <h1>{property.name}</h1>
      <ImageGallery items={images} />
      <ul>
        {property.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <p>{property.price}€</p>
    </div>
  );
}