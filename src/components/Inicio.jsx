import React from 'react';
import Navbar from './Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/css/Inicio.css';

// Importa las imágenes desde la carpeta de assets
import imagen1 from '../assets/images/parejas.jpg';
import imagen2 from '../assets/images/parejas4.jpg';
import imagen3 from '../assets/images/parejas2.jpg';
import diabetesImage from '../assets/images/Diabetes.jpg'; // Importa la imagen Diabetes.jpg

const Inicio = () => {
  // Lista de imágenes con rutas importadas
  const images = [
    { src: imagen1, alt: 'Imagen 1' },
    { src: imagen2, alt: 'Imagen 2' },
    { src: imagen3, alt: 'Imagen 3' },
  ];

  return (
    <div>
      <Navbar />

      <div className="inicio-container">
        <div className="intro-section">
          {/* Aplica estilos al contenedor para alinear la imagen y el texto */}
          <div className="image-text-container">
            {/* Utiliza clases de Bootstrap para el diseño responsivo */}
            <div className="d-flex flex-column flex-md-row align-items-md-start">
              {/* Ajusta el estilo de la imagen para que sea más pequeña */}
              <div className="img-container">
                <img
                  src={diabetesImage}
                  alt="Diabetes Mellitus"
                  className="img-fluid mw-100" // Clase para hacer la imagen responsiva y ocupar todo el ancho
                  style={{ maxWidth: '250px', maxHeight: '300px' }} // Estilo personalizado para el tamaño de la imagen
                />
              </div>
              <div className="text-container">
                <h1 className="title-box">Diabetes Mellitus</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-container">
          {/* Carrusel de imágenes con clases personalizadas */}
          <Carousel className="custom-carousel">
            {images.map((image, index) => (
              <div key={index} className="custom-carousel-item">
                {/* Ajusta el estilo de las imágenes del carrusel para que sean más pequeñas */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="carousel-image"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Área de información con clases personalizadas */}
        <div className="info-container">
          <div className="info-section custom-info-section">
            <h2 className="info-title">¿Qué es la Diabetes Mellitus?</h2>
            <p className="info-text">
              La diabetes mellitus (DM) es una enfermedad metabólica crónica que está adquiriendo proporciones de epidemia en los últimos años.
            </p>
          </div>
          {/* Agrega más secciones de información aquí */}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
