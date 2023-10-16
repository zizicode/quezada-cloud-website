import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/navbar/NavBar";
import SwiperNav from "../components/navbar/SwiperNav";
import ChangeDivisas from "../components/divisas/ChangeDivisas";
import CHome from "../components/content-home/CHome";
import Loading from "../components/pageLoading/Loading";
import { useNavigate, redirect  } from "react-router-dom";

const Home = () => {
  const history = useNavigate();
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === "q") {
        return redirect('/m/');
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [history]);

  // State para controlar el estado de carga
  const [load, setLoad] = useState("Load");

  useEffect(() => {
    // Función para cambiar el estado de carga después de un tiempo
    const changeLoadState = () => {
      if (load === "Load") {
        setTimeout(() => {
          setLoad("false");
        }, 1500);
      }
    };

    // Cambiar el estado de carga cuando el documento está completamente cargado
    if (document.readyState === "complete") {
      changeLoadState();
    } else {
      document.onreadystatechange = () => {
        if (document.readyState === "complete") {
          changeLoadState();
        }
      };
    }
  }, [load]);

  return (
    <>
      <Loading load={load} />
      <Helmet>
        <meta name="description" content="Home" />
        <title>Agente de Cambio Quezada | Inicio</title>
      </Helmet>
      <NavBar />
      <SwiperNav />
      <ChangeDivisas />
      <CHome />
    </>
  );
};

export default Home;
