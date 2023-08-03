import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Loading from "../components/pageLoading/Loading";

import NavBar from '../../src/components/navbar/NavBar';
import Solicitar from "../components/Modal/Solicitar";
import styles from "./styles_pages/styles_pages.module.css";

// icons
import {BsWhatsapp} from 'react-icons/bs';
import {MdOutlineMailOutline} from 'react-icons/md';
import {HiOutlineChatAlt2} from 'react-icons/hi';

const Image_dispositivos = require.context("../../public/online_acq", true);

const Quezadaonline = () => {

  function openChat(){
    window.Trengo.Api.Widget.open('chat')
  }

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
  //END State load Page


  return (
    <>
      <Loading load={load} />
      <Helmet>
        <title>Quezada Online</title>
        <meta name="description" content="Quienes somos" />
      </Helmet>
      <NavBar />
      <div className={styles.container}>


        {/* <div className={styles.message_online}>
          <span>
            En la situación en la que nos encontramos actualmente a nivel
            mundial, nos hemos dado cuenta de la importancia de la tecnología.
            Como empresa innovadora les queremos dar a conocer nuestro nuevo
            proyecto, Quezada Online. ¡Le invitamos a ser parte!
          </span>
        </div> */}

        <div className={styles.sib_info}>
          <div className={styles.container_sib}>
            <div className={styles.info_sib}>
              <h2>¿Cómo puedo beneficiar de Quezada Online?
              </h2>
              <p>
                ¡Ahora no tienes que salir de tu casa u oficina para hacer una
                operación con nosotros!
              </p>
              <p>
                Con tan solo con unos clicks en nuestra página web o app móvil
                puedes consultar las tasas, solicitar tasa preferencial y
                solicitar tu operación de cambio por transferencia, servicio a
                domicilio o en unas de nuestras sucursales. ¡Siempre con el mejor
                servicio!
              </p>
              <p>
                Hemos actualizado nuestra página web y creado una App móvil para
                que puedas comunicarte de manera más fácil con nosotros.
              </p>
            </div>


            <div className={styles.sib_image}>
              <div className={styles.about__player}>
                <iframe src="https://www.youtube.com/embed/_IgSb7H5MPM?controls=0" title="Quezada Agente de cambio" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>

          </div>
        </div>

        <br /><br /><br /><br />

        <div className={styles.forma}>
          <h3>¡Cambiar Online nunca fue tan fácil! </h3>

          <div className={styles.container_option}>
            <a href="https://api.whatsapp.com/send/?phone=18095565111&text&app_absent=0"><BsWhatsapp/> Whatsapp</a>
            <a href="mailto:divisas@agentedecambioquezada.com"><MdOutlineMailOutline/> Correo</a>
            <button onClick={() => openChat()}><HiOutlineChatAlt2/> Chat online</button>
          </div>

          {/* <p>
            Contamos con distintas vías de comunicación: Número de WhatsApp: <a href="tel:8095562702">809 556-2702</a> para asistirte en tus cambios de divisas, <a href="mailto:divisas@agentedecambioquezada.com">Correo Electronico</a>. El live chat en nuestra web, en donde con gusto uno de nuestros representantes te atenderá. Gracia a nuestro proyecto online, no tienes que abandonar tu hogar y oficina para cambiar tus divisas.
          </p> */}

          <div className="container_solicitar-tasa">
              <Solicitar />
            </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className={styles.header_online}>
          <div className={styles.container_header_online}>
            {/* Dispositivos */}
            <div className={styles.image_dispositivos}>
              <div className={styles.image_container_d}>
                <a href="https://play.google.com/store/apps/details?id=com.agentedecambioquezada.app&hl=es"><img src={Image_dispositivos`./android.png`} alt="android" /></a>
              </div>
              <div className={styles.image_container_d}>
                <a href="https://apps.apple.com/do/app/quezada-agente-de-cambio/id1496891065"><img src={Image_dispositivos`./iphone.png`} alt="iphone" /></a>
              </div>
            </div>

            {/* info header online */}
            <div className={styles.info_header_online}>
              <h1>¡Bienvenidos a nuestra sucursal Online! </h1>
              <h2>¡DESCARGA NUESTRA APP!</h2>
              <p>
                Accede a nuestros servicios desde la comodida de tu smartphone
                con nuestra app disponible tanto en Android como en Iphone.
              </p>
              <div className={styles.header_download}>
               <a href="https://play.google.com/store/apps/details?id=com.agentedecambioquezada.app&hl=es" target=" blank">
               <img
                  src={Image_dispositivos`./google_play.png`}
                  alt="android_download"
                />
               </a>
                <a href="https://apps.apple.com/do/app/quezada-agente-de-cambio/id1496891065" target=" blank">
                <img
                  src={Image_dispositivos`./apple_store.png`}
                  alt="iphone_download"
                />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Quezadaonline;
