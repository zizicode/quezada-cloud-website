import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Asegúrate de importar los estilos de Swiper
import "./swiper.css";
import SwiperCore, { Autoplay, Navigation, EffectFade } from 'swiper'; // Importa el módulo de navegación
// import required modules
// import { Pagination  } from 'swiper/modules';

// Button Solicitar Tasa
import Solicitar from '../Modal/Solicitar';

SwiperCore.use([Navigation]); // Instala el módulo de navegación

// Imagenes swipper
const ImaSwiper = require.context("../../assets", true);

const SwiperNav = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const swiperOptions = {
    modules: [EffectFade], //Efecto transition
    effect: "fade", //Efecto
    slidesPerView: 1, // Número de slides visibles
    spaceBetween: 0, // Espacio entre cada slide
    autoplay: {
      delay: 7200,
      disableOnInteraction: false,
    },
    navigation: { // Habilita los botones de siguiente y anterior
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };

  const subInfo = 'Cambiar divisas fácil y rápido, online o en una de nuestras sucursales.'
  return (
    <div>
      <Swiper {...swiperOptions}
        loop={true}
        modules={[Autoplay, Navigation, EffectFade]}
        onSlideChange={handleSlideChange}
        className="mySwiper">

        <SwiperSlide style={{ backgroundImage: 'url(' + ImaSwiper`./quezada1.webp` + ')' }}>
          <div className="grid-container-swipper">
            <div className="column-1-swipper">
              <p>{subInfo}</p>
              <div className="barra_br"></div>
              <div className="constainer_solicitar_tasa_swipper">
                <Solicitar name={'Solicitar Tasa'} stylec={'solicitar_tasa_swipper'} className='solicitar_tasa_swipper' />
              </div>
            </div>
            <div className="column-2-swipper">
              <div className="container-sib-swiper" style={{display:'flex'}}>
                <img src={ImaSwiper`./sello_png1.png`} alt="SIB" />
                <img src="https://certificaciones.uaf.gob.do/certificados/UAF00240YQ41.png" alt="SIB" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'url(' + ImaSwiper`./HR-46.webp` + ')' }}>
          <div className={`animation-container ${activeIndex === 0 ? 'active' : ''}`}>
            <div className="animation-show">
              <h3>Transferencias</h3>
              <div className="constainer_solicitar_tasa_swipper" style={{zIndex:'99999999'}}>
                <Solicitar name={'Solicitar Tasa'} stylec={'solicitar_tasa_swipper'} className='solicitar_tasa_swipper' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'url(' + ImaSwiper`./administracion.jpg` + ')' }}>
        <div className={`animation-container ${activeIndex === 1 ? 'active' : ''}`}>
            <div className="animation-show">
              <h3>Cambio de Divisas</h3>
              <div className="constainer_solicitar_tasa_swipper" style={{zIndex:'99999999'}}>
                <Solicitar name={'Solicitar Tasa'} stylec={'solicitar_tasa_swipper'} className='solicitar_tasa_swipper' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'url(' + ImaSwiper`./corporativo-15.jpeg` + ')' }}>
        <div className={`animation-container ${activeIndex === 2 ? 'active' : ''}`}>
            <div className="animation-show">
              <h3>Avances de efectivo con tarjeta</h3>
              <div className="constainer_solicitar_tasa_swipper" style={{zIndex:'99999999'}}>
                <Solicitar name={'Solicitar Tasa'} stylec={'solicitar_tasa_swipper'} className='solicitar_tasa_swipper' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Agrega más Slides con diferentes imágenes de fondo si es necesario */}
      </Swiper>
      {/* Agrega los botones de siguiente y anterior */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  )
}

export default SwiperNav;