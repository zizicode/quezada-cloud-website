import React from "react";
import Solicitar from "../Modal/Solicitar";
// Icons
import { BsCurrencyExchange } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { BiTransferAlt } from "react-icons/bi";

// Styles
import "../../components/content-home/chome.css";
import CBlog from "../CBlog/CBlog";

// Import images
const imageBlog = require.context("../../assets/cblog", true);

const CHome = () => {
  return (
    <div className="content_all_home">

      <h2>Servicios</h2>

      <div className="container_services">
        <div className="item_services">
          <div className="ribbon">
            <div className="barra_ribbon"></div>
          </div>

          <div className="content_item_services">
            <strong>01</strong>
            <h3>Cambios de divisas</h3>
            <p>
              Compramos y vendemos dólares, euros, dólar canadiense, libras
              esterlinas y franco suizo a la mejor tasa del mercado cambiario.
            </p>

            <i>
              <BsCurrencyExchange />
            </i>
          </div>
        </div>

        <div className="item_services grid2">
          <div className="ribbon">
            <div className="barra_ribbon"></div>
          </div>

          <div className="content_item_services">
            <strong>02</strong>
            <h3>Avances de efectivo</h3>
            <p>
              Contamos con disponibilidad para avances de efectivo en todas
              nuestras sucursales, tarjetas Visa, Mastercard y American express,
              hasta un monto de 400 USD por día.
            </p>

            <i>
              <GiReceiveMoney />
            </i>
          </div>
        </div>

        <div className="item_services grid3">
          <div className="ribbon">
            <div className="barra_ribbon"></div>
          </div>

          <div className="content_item_services">
            <strong>03</strong>
            <h3>Transferencias</h3>
            <p>
              Realizamos transferencias nacionales, para que tus cambios de
              divisas sean más fáciles.
              <br />
              Ofrecemos calidad, seguridad y confianza en cada una de tus
              operaciones. #CadacentavoCuenta
            </p>

            <i>
              <BiTransferAlt />
            </i>
          </div>
        </div>
      </div>
      <div className="solicitar_divisas">
          <Solicitar />
        </div>
      <br />
      <br />
      <br />
      <br />

      {/* END SERVICES */}

      <div className="container_blog">
        <h2>Blog post</h2>
        <div className="line_blog_title"></div>
        <span className="coment_blog">49 Post Publicados</span>

        <div className="gif_drag">
          <img
            src={imageBlog`./dragCursor.gif`}
            alt="dragCursor"
            className="drag"
          />
        </div>
        <CBlog />
      </div>
    </div>
  );
};

export default CHome;
