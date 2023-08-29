import React from "react";
import axios from "axios";
import { useState } from "react";
import "../../components/divisas/change-divisas.css";
import UrlChange from "../../data/changeD";
import changeOfflineD from "../../data/change-offlineD";
import Calculator from "./calculator/calculator";

// Svg Ads
import ads from "../../assets/svg/ads-advertising.svg";

const baseURL = UrlChange();
const changeOffline = changeOfflineD();

const ChangeDivisas = () => {
  const [changeD, setChangeD] = useState(changeOffline);
  const [Sales, setSales] = useState(changeOffline[0]);
  const [actividDivisas, setActividDivisas] = useState("Dolar1");

  function divisas() {
    // var token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlJhdGVzYXBpIiwiZ2l2ZW5fbmFtZSI6IkFQSSBUYXNhcyIsIkNsaWVudElkIjoiNkQ3QjlGOUYtOEMwRC00NDYwLTkwQkMtOUNGRTI0NzFCRUEzIiwibmJmIjoxNTc2NTkzMTAxLCJleHAiOjE1NzY2Nzk1MDEsImlhdCI6MTU3NjU5MzEwMX0.sc0MnipMqzo8ICQWdRN2UB964QT0v3rjlrO2F0CN5aet4z-9fhFAA1habup4iByalWONtyGHvnPm90F1FH4Ohw';

    try {
      axios
        .get(`${baseURL}`)
        .then((response) => {
          setChangeD(response.data);
          setSales(response.data[0]);
        })
        .catch(function (error) {
          console.log("net::ERR_INTERNET_DISCONNECTED");
          setChangeD(changeOffline);
          setSales(changeOffline[0]);
        });
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }

  React.useEffect(() => {
    // Inicializar tasas:
    divisas();

    setInterval(() => {
      divisas();
      setActividDivisas("Dolar1");
      // generar un useState de cambio y existe cambio.
    }, 180000);
  }, [setChangeD]);

  // console.log(changeD === changeD)
  function change(boton, valor) {
    setActividDivisas(boton);
    setSales(changeD[valor]);
  }

  return (
    <div className="container__divisas">
      <div className="barra_up b_bottom"></div>

      {/* Suscribete ya */}

      <div className="container_divisas">
        <div className="panel_change">
          <h2>Tablero: Tasas del Día</h2>
          <div className="change">
            <div className="change_divisa">
              <div className="compra1">
                <h3>
                  Compra: <small>{Sales.purchaseRate}</small>
                </h3>
              </div>
              <div className="line">
                <small>
                  {Sales.currencyCode + " " + Sales.instrumentDescription}
                </small>
              </div>
              <div className="venta1">
                <h3>
                  Venta: <small>{Sales.saleRate}</small>
                </h3>
              </div>
            </div>
            <ul>
              <li className="dolar1">
                <div
                  id="divisa"
                  onClick={() => change("Dolar1", 0)}
                  className={actividDivisas === "Dolar1" ? "active_divisa" : ""}
                ></div>
                <small>Dólar EF</small>
              </li>
              <li className="dolar2">
                <div
                  id="divisa"
                  onClick={() => change("Dolar2", 1)}
                  className={actividDivisas === "Dolar2" ? "active_divisa" : ""}
                ></div>
                <small>Dólar CK.</small>
              </li>
              <li className="euro1">
                <div
                  id="divisa"
                  onClick={() => change("Euro1", 2)}
                  className={actividDivisas === "Euro1" ? "active_divisa" : ""}
                ></div>
                <small>Euro</small>
              </li>
              <li className="dolar3">
                <div
                  id="divisa"
                  onClick={() => change("Dolar3", 3)}
                  className={actividDivisas === "Dolar3" ? "active_divisa" : ""}
                ></div>
                <small>Dólar Can.</small>
              </li>
              <li className="franco1">
                <div
                  id="divisa"
                  onClick={() => change("Franco1", 4)}
                  className={
                    actividDivisas === "Franco1" ? "active_divisa" : ""
                  }
                ></div>
                <small>Francos EF</small>
              </li>
              <li className="esterlina1">
                <div
                  id="divisa"
                  onClick={() => change("Essterlina1", 5)}
                  className={
                    actividDivisas === "Essterlina1" ? "active_divisa" : ""
                  }
                ></div>
                <small>Libra </small>
              </li>
            </ul>

            {/* Button open moral calculator */}
            <Calculator  rates={changeD} />
          </div>
        </div>
      </div>

      <div className="splash">
        <div className="ads">
          <img src={ads} alt="ads" />
        </div>
        <h2>¿Te gustaría estar siempre al tanto?</h2>
        <br />
        <span>
          Recibe actualizaciones periódicamente sobre temas de interés
          financiero y del mercado de compra y venta de divisas en general con
          nuestro newsletter.
        </span>

        <button className="button_splash">
          <a href="https://keap.app/contact-us/7331125519563925">
            ¡Inscríbete aquí!
          </a>
        </button>
      </div>
      <br />
      <br />

      {/* Video wrapper */}

      <div className="container-wrapper">
      <div className="container-title-wrapper">
      <h1 className="title">AGENTE DE CAMBIO QUEZADA</h1>
      <p className="description">Conócenos más</p>
    </div>
        <div className="video-wrapper">
          <iframe
            title="YouTube Video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gCNvvUsXh6g?controls=0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* end video wrapper */}
    </div>
  );
};

export default ChangeDivisas;
