import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar/NavBar";

// Styles
import styles from './styles_pages/styles-contacto.module.css';

// Preload pages
import Loading from "../components/pageLoading/Loading";


const Image = require.context("../../src/assets", true);


const Contacto = () => {

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
      }, 1500);
    }
  })
  //END State loadPage
  return (
    <>
      <Loading load={load} />
      <NavBar />
      <header className={styles.header}>
        <div className={styles.container_header}>
          <div className={styles.caja_gradient}>
            <h1>CONTACTANOS</h1>
          </div>
          <img src={Image`./administracion.jpg`} alt="Contacto" />
        </div>
      </header>

      <div className={styles.container_all}>
        <div className={styles.contacto}>
          <div className={styles.title}>
            <h2>Formas de contacto</h2>
          </div>
          <div className={styles.callcenter}>
            <section className={styles.section}>
              <h4>Tel – Quezada oficina principal:</h4>
              <p className="details"><a href="tel:8095562702">(809) 556-2702</a></p>
            </section>

            <section className={styles.section}>
              <h4>Extensiones por sucursal</h4>
              <li>La Romana: EXT.: 1</li>
              <li>Friusa: EXT.: 2</li>
              <li>Downtown: EXT.: 3</li>
              <li>Santo Domingo: EXT.: 4</li>
              <li>Higuey: EXT.: 5</li>
            </section>

            <section className={styles.section}>
              <h4>Tel & WhatSapp – Mesa de Divisas:</h4>
              <p><a href="tel:8095565111">(809) 556-5111</a></p>
            </section>

            <section className={styles.section}>
              <h4>Tel – Oficinas Bávaro y Punta Cana:</h4>
              <p><a href="tel:8095521517">(809) 552-1517</a></p>
            </section>
          </div>

          <div className={styles.email}>
            <section className={styles.section}>
              <h3>Contactar via Correo Electronico</h3>
            </section>

            <section className={styles.section}>
              <p>
                <h5>Mesa de divisas:</h5>
                <li><a href="mailto:cambio@quezada.do">cambio@quezada.do</a></li>
              </p>
              <p>
                <h5>Contabilidad:</h5>
                <li><a href="mailto:contabilidad@agentedecambioquezada.com">Contabilidad@agentedecambioquezada.com</a></li>
              </p>
              <p>
                <h5>Recursos Humanos:</h5>
                <li><a href="mailto:rrhh@agentedecambioquezada.com">rrhh@agentedecambioquezada.com</a></li>
              </p>
              <p>
                <h5>Cumplimiento:</h5>
                <li><a href="mailto:cumplimiento@agentedecambioquezada.com">Cumplimiento@agentedecambioquezada.com</a></li>
              </p>
            </section>
          </div>
        </div>


        {/* Send Mail */}

        <div className={styles.email_send}>
          <h2>Envíenos un mensaje</h2>
          <form action="#">
            <div className={styles.inputs}>
              <input type="name" placeholder="Nombre" />
              <input type="email" placeholder="su@correo.com" required />
              <input type="text" placeholder="Asunto" required />
            </div>
            <div className="textarea">
              <textarea name="" id="" cols="30" rows="10" required placeholder="Hola, es un placer...">

              </textarea>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacto;
