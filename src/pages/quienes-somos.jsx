import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import NavBar from "../../src/components/navbar/NavBar";
import styles from "../../src/pages/styles_pages/styles_quienes_somos.module.css";
import Loading from "../components/pageLoading/Loading";
import Solicitar from "../components/Modal/Solicitar";

import { IoIosRocket } from 'react-icons/io';
import { GiPodiumWinner } from 'react-icons/gi';
import { TiGroup } from 'react-icons/ti';


const QuienesSomos = () => {

  // State loadPage
  const [load, setLoad] = useState('Load');

  if (load === 'Load') {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          setLoad('false');
        }, 1500);
      }
    }
  }

  useEffect(() => {
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setLoad('false');
      }, 1000);
    }
  })
  //END State loadPage


  return (
    <>
      <Loading load={load} />

      <Helmet>
        <title>Quezada | Quienes Somos</title>
        <meta name="description" content="Quienes somos" />
      </Helmet>

      <NavBar />

      <div className={styles.header_container}>
        <div className={styles.somos}>
          <div className={styles.container_header}>
            <div className={styles.pinture_header}>
            </div>

            <div className={styles.title_pinture}>
              <h2>Agente de cambio Quezada</h2>
              <p>Agente de Cambio Quezada es una compañía basada en la compra y venta de divisas Su origen viene del 1975, cuando el comerciante Mario Arturo Quezada decide incluir estos servicios en su mercado. Desde el inicio, el señor Quezada quiso aportar y contribuir al desarrollo de su pueblo al ver la necesidad que tenía la ciudadanía por los cambios de divisas e incluso, cheques. Aquella iniciativa fue una de las mejores elecciones en su vida como empresario.</p>
              <p>Actualmente, somos una entidad regulada por las autoridades nacionales competentes. Figuran: la Superintendencia de bancos de la República Dominicana, Banco central Dominicano y la Unidad de Análisis Financiero. Contamos con un equipo capacitado, ágil y preparado para brindar un servicio de cambio personalizado a cada uno de nuestros clientes.</p>
              <p>Una de las características más importantes de la compañía, es que siempre brinda la mejor tasa del mercado. El dólar es la divisa con más demanda, sin embargo, dentro de nuestros servicios podrás contar con la compra y venta de euros, dólares canadienses, francos suizos y libras esterlinas.</p>
            </div>
          </div>
          <div className={styles.caja_gradient}></div>
        </div>
      </div>

      <section className={styles.container_about}>
        <div className={styles.about_title}>
          <h1>Agente de Cambio Quezada, S. A.</h1>
          <h2>Es una entidad destinada al servicio de cambios de divisas</h2>
          <h4>‘Cada centavo cuenta’</h4>
        </div>
        <div className={styles.container__about}>
          <div className={styles.about_player}>
            <div className={styles.about__player}>
              <iframe src="https://www.youtube.com/embed/gCNvvUsXh6g?controls=0" title="Quezada Agente de cambio" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          <div className={styles.about_info}>
            <h3>Historia</h3>
            <div className={styles.line}></div>
            <p>La empresa ha crecido de manera exitosa gracias al apoyo familiar con el que ha contado el señor Quezada. Sus hijos, los licenciados, Edwim Arturo Quezada y Miguel Arturo Quezada, son parte primordial de la compañía, además de otros miembros de la familia. </p>
            <p>Nos encontramos físicamente en toda la zona este del país, con sucursales en: La Romana, Higuey, Downtown Punta Cana, Friusa y Santo Domingo. Además, contamos con nuestra sexta sucursal totalmente <Link to="/quezada-online" className={styles.enlaces}>en línea</Link>, en donde a través de nuestros canales digitales puedes realizar tu cambio sin la necesidad de salir de tu hogar u oficina, disponible en cualquier parte de República Dominicana.</p>
            <div className="container_solicitar-tasa">
              <Solicitar />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.section_container}>
          <div className={styles.container_all}>
            <div className={styles.card}>
              <div className={styles.title_card}>
                <IoIosRocket />
                <h3>misión</h3>
              </div>
              <div className={styles.container_text}>
                <p>Ofrecer un servicio personalizado de cambio de divisas con las tasas más competitivas del mercado, ofreciendo productos y servicios con calidad e innovación, en un entorno seguro y confiable, apegados a la normativas regulatorias vigentes de nuestro país.</p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.title_card}>
                <GiPodiumWinner />
                <h3>Visión</h3>
              </div>
              <div className={styles.container_text}>
                <p>Ser la empresa líder y referente en el mercado de divisas, brindando soluciones adecuadas, ampliando nuestra cobertura a nivel nacional, prestando un servicio de alta calidad, diversificando nuestro portafolio productos y servicios.</p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.title_card}>
                <TiGroup />
                <h3>VALORES</h3>
              </div>
              <div className={styles.container_text}>
                <li>Liderazgo</li>
                <li>Integridad</li>
                <li>Innovación</li>
                <li>Compromiso</li>
                <li>Excelencia en el servicio</li>
                <li>Seguridad</li>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuienesSomos;
