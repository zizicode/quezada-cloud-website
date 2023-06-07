import React from "react";

// Iconos
import {FiExternalLink} from 'react-icons/fi';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../components/CBlog/cblog.css";

// import required modules
import { Pagination, Navigation } from "swiper";

// Importando imagenes
const imageBlog = require.context("../../assets/cblog", true);

const CBlog = () => {
  return (
    <div className="blog-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card_blog">
            <div className="image_card">
              <a href="/#">
              <img src={imageBlog`./finanzas1.webp`} alt="" className="card_image" />
              <div className="link_post">
                <i><FiExternalLink /></i>
                <span className="title_link_post">
                  Ir al Post
                </span>
              </div>
              </a>
            </div>
            <div className="card_item">
              <div className="item_card">
                <span className="data">10-10-2222</span>
                <h2>Expertos en finanzas</h2>
                <span className="line_item_blog"></span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt quod ex mollitia eaque ipsum iste, reprehenderit
                  expedita dolore quae ea?
                </p>

                <button>View More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card_blog">
            <div className="image_card">
              <a href="/#">
              <img src={imageBlog`./finanzas1.webp`} alt="" className="card_image" />
              <div className="link_post">
                <i><FiExternalLink /></i>
                <span className="title_link_post">
                  Ir al Post
                </span>
              </div>
              </a>
            </div>
            <div className="card_item">
              <div className="item_card">
                <span className="data">10-10-2222</span>
                <h2>Expertos en finanzas</h2>
                <span className="line_item_blog"></span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt quod ex mollitia eaque ipsum iste, reprehenderit
                  expedita dolore quae ea?
                </p>

                <button>View More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card_blog">
            <div className="image_card">
              <a href="/#">
              <img src={imageBlog`./finanzas1.webp`} alt="" className="card_image" />
              <div className="link_post">
                <i><FiExternalLink /></i>
                <span className="title_link_post">
                  Ir al Post
                </span>
              </div>
              </a>
            </div>
            <div className="card_item">
              <div className="item_card">
                <span className="data">10-10-2222</span>
                <h2>Expertos en finanzas</h2>
                <span className="line_item_blog"></span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt quod ex mollitia eaque ipsum iste, reprehenderit
                  expedita dolore quae ea?
                </p>

                <button>View More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CBlog;
