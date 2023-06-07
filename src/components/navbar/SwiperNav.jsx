import React, { useState } from 'react';
// Import Swiper React components
import { Autoplay, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./swiper.css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
// import Solicitar from "../Modal/Solicitar";

// import image header
const ImaSwiper = require.context("../../assets", true);

const SwiperNav = () => {

  // store swiper instance
  const [swiper, setSwiper] = useState(null);

  const slideTo = (index) => swiper.slideTo(index);
  console.log(slideTo);

  // const solicitar = "https://quezada.do/divisas.html";
  // const whatsapp = "https://api.whatsapp.com/send/?phone=18095565111&text&app_absent=0";
  //Configuracion del Swiper Slider
  const params = {
    modules: [EffectFade, Autoplay],
    effect: "fade",
    spaceBetween: 0,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
  };

  return (
    // onSlideChange={() => setActive("text-animated")}
    <Swiper {...params} nSwiper={setSwiper}  className="Header_swipe">
      <div className="caja_"></div>
      <div className="container_button_swiper">

        {/* <div className="container_item_swiper">
          <h1 className="item-title">Cambia divisas fácil y rápido, online o en alguna de nuestras oficinas</h1>
          <p className="info"></p>
        </div> */}

        <div className="container_img-sib">
          <div className="img_sib">
            <img src={ImaSwiper`./sello_png1.png`} alt="sib" />
          </div>
        </div>

      </div>
      <SwiperSlide  className="quezada__principal image_header_swiper">
        <img src={ImaSwiper`./negocios1.webp`} alt="header" />
        <div className="container-animated">
          <div className="text-animated">SLIDE IN 1</div>
          <div className='sub-text-animated'>Lorem Ipsum is simply dummy text of the printing and typesettin</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="quezada__principal image_header_swiper">
        <img src={ImaSwiper`./quezada1.webp`} alt="header" />
        <div className="container-animated">
          <div className="text-animated">SLIDE IN 2</div>
          <div className='sub-text-animated'>Lorem Ipsum is simply dummy text of the printing and typesettin</div>
        </div>
        <div
          data-aos="fade-left" data-aos-duration="3000"//Here you can use any of the AOS animations
        >
          
        </div>
      </SwiperSlide>
      <SwiperSlide className="quezada__principal image_header_swiper">
        <img src={ImaSwiper`./confianza1.webp`} alt="header" />
        <div className="container-animated">
          <div className="text-animated">SLIDE IN 3</div>
          <div className='sub-text-animated'>Lorem Ipsum is simply dummy text of the printing and typesettin</div>
        </div>
        <div
          data-aos="fade-left" data-aos-duration="3000"//Here you can use any of the AOS animations
        >
         
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperNav;
