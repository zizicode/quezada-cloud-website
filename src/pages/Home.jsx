<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import CHome from "../components/content-home/CHome";
import ChangeDivisas from "../components/divisas/ChangeDivisas";
 import SwiperNav from "../components/navbar/SwiperNav";
import NavBar from '../../src/components/navbar/NavBar';
import Loading from "../components/pageLoading/Loading";



const Home = () => {

 // State loadPage
 const [load, setLoad] = useState('Load');

 if(load === 'Load'){
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
=======
import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import CHome from "../components/content-home/CHome";
import ChangeDivisas from "../components/divisas/ChangeDivisas";
 import SwiperNav from "../components/navbar/SwiperNav";
import NavBar from '../../src/components/navbar/NavBar';
import Loading from "../components/pageLoading/Loading";



const Home = () => {

 // State loadPage
 const [load, setLoad] = useState('Load');

 if(load === 'Load'){
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
>>>>>>> 42c6585 (Update main home)
