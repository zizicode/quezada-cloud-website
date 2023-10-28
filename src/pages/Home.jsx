import React, { useState, useEffect } from "react";
import { useNavigate, redirect } from "react-router-dom";

import styled from "@emotion/styled";

import { Helmet } from "react-helmet";

import { Typography, Divider } from "@mui/material";

import NavBar from "../components/navbar/NavBar";
import SwiperNav from "../components/navbar/SwiperNav";
import ChangeDivisas from "../components/divisas/ChangeDivisas";
import CHome from "../components/content-home/CHome";
import Loading from "../components/pageLoading/Loading";
import { posts as postData } from "../data/PostFakes";

const Home = () => {
  // Posts the blog
  const [posts, setPosts] = useState([]);

  const history = useNavigate();
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === "q") {
        return redirect("/m/");
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
        setPosts(postData);
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

      {/* section of the latest blog posts  */}
      <ContentLatestPost>
        <Container>
          <Divider />
          <StyledTypography variant="h5">
            Últimas Publicaciones
          </StyledTypography>
          <Divider />
        </Container>
        <ContainerPost>
          {posts.length !== 0 ? 

          posts.slice(0, 3).map((post, index) => (
            <h1>Hola</h1>
          ))
          
          : <ErrorPost />}
        </ContainerPost>
      </ContentLatestPost>
    </>
  );
};

export default Home;

const ContentLatestPost = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  gap: 20px;
`;

const ContainerPost = styled.div`
  width: 100%;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  font-weight: 700;
  color: var(--text-azul);
`;

const ErrorPost = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px 0;

  &::before {
    content: "No hay publicaciones para mostrar";
    width: 100%;
    text-align: center;
  }
`;
