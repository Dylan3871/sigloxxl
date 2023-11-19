import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/scss/Inicio.scss';
import imagen1 from '../assets/images/azucar.jpg';
import imagen2 from '../assets/images/diabetes.png';
import imagen3 from '../assets/images/diabetesimg.jpg';
//import diabetesImage from '../assets/images/siglo21.png';
import '@fortawesome/fontawesome-free/css/all.css';


const Inicio = () => {
  const [showFixedBox, setShowFixedBox] = useState(false);

  const images = [
    { src: imagen1, alt: 'Imagen 1' },
    { src: imagen2, alt: 'Imagen 2' },
    { src: imagen3, alt: 'Imagen 3' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowFixedBox(true);
      } else {
        setShowFixedBox(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        <Navbar />
        <div className="inicio-container">
            {showFixedBox && <div className="fixed-box"></div>}
            <div className="container mt-5">
                <div className="row">
                    
                    <div className="col-md-6">
                        <div className="diabetes-title-wrapper">
                            {/* Imagen pequeña al lado del título */}
                            {/* <img
                                src={diabetesImage}
                                alt="Diabetes Image"
                                className="diabetes-image-small img-fluid"
                            /> */}
                            <h2 className="diabetes-title">
                                <span className=".diabetes-title ">Diabetes Mellitus</span>
                            </h2>
                        </div>
                        <Carousel>
                {images.map((image, index) => (
                  <div key={index} className="custom-carousel-item">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="carousel-image img-fluid"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">
                    <span className="highlight-text">¿Qué es la Diabetes Mellitus?</span>
                  </h2>
                  <p className="card-text">
                    La diabetes mellitus (DM) es una enfermedad metabólica crónica
                    que está adquiriendo proporciones de epidemia en los últimos
                    años.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Se Caracteriza por</h2>
                  <p className="card-text">
                    Se caracteriza por alteraciones en los niveles de azúcar en
                    la sangre, lo que puede tener graves repercusiones en la salud
                    si no se controla adecuadamente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Tipos de Diabetes:</h2>
                  <ul className="card-text">
                    <li>Diabetes Tipo 1</li>
                    <li>Diabetes Tipo 2</li>
                    <li>Diabetes Gestacional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Síntomas comunes:</h2>
                  <ul className="card-text">
                    <li>Aumento de la sed</li>
                    <li>Aumento de la micción</li>
                    <li>Aumento del hambre</li>
                    <li>Fatiga</li>
                    <li>Pérdida de peso inexplicada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Estrategias de manejo:</h2>
                  <ul className="card-text">
                    <li>Control de la dieta</li>
                    <li>Actividad física</li>
                    <li>Monitoreo de glucosa</li>
                    <li>Tratamiento farmacológico</li>
                    <li>Educación en diabetes</li>
                    <li>Manejo del estrés</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
<div className="footer-box">
    <div className="address">
        <p>UBICACIÓN:Calzada de Barbabosa No. 150, San Antonio Buenavista; Zinacantepec, Toluca Edo. de México CP. 51350.</p>
    </div>
    <div className="social-icons">
        {/* Enlaces a tus perfiles de redes sociales */}
        <a href="https://www.facebook.com/profile.php?id=100090304582551&locale=es_LA" target="_blank" rel="noopener noreferrer">
          <i className="social-icon fab fa-facebook"></i>
        </a>
        <a href="https://maps.app.goo.gl/pwgyS9d4bPB1VaG18" target="_blank" rel="noopener noreferrer">
          <i className="social-icon fab fa-google maps"></i>
        </a>
        <a href="https://www.instagram.com/grupoeducativosiglo21/" target="_blank" rel="noopener noreferrer">
          <i className="social-icon fab fa-instagram"></i>
        </a>
        {/* Agrega más enlaces e iconos según sea necesario */}
      </div>
</div>

    </>
  );
};

export default Inicio;