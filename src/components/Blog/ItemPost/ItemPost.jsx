import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "@emotion/styled";
import { Box, Divider } from "@mui/material";
import parse from "html-react-parser";
import useTiempoTranscurrido from "./../../../helpers/hooks/useTiempoTranscurrido";

const ItemPost = ({ data }) => {
  const { image_url, title, body, created_at } = data;
  const tiempoTranscurrido = useTiempoTranscurrido(created_at);

  useEffect(() => {
    AOS.init({
      // Opciones de configuración de AOS, si es necesario
    });
  }, []);

  return (
    <Card data-aos="fade-up">
      <CardImage image={image_url}></CardImage>
      <CardBody>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{parse(body)}</PostDescription>
        <LineDivider />
        <DatePost>
          <span style={{fontWeight:'bold'}}>Publicado: </span>
          {tiempoTranscurrido}
        </DatePost>
      </CardBody>
    </Card>
  );
};

export default ItemPost;

const Card = styled(Box)`
  width: 100%;
  max-width: 250px;
  min-width: 80px;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #FDFDFD;
  border-radius: 5px !important;
  padding: 0 !important;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  * {
    padding: 0;
  }
`;

const CardImage = styled(Box)`
  width: 100%;
  height: 130px;
  border-radius: 5px;
  background-color: #FDFDFD;
  background-image: ${(props) => `url(${props.image})` || "none"};
  background-size: cover;
  background-position: center;
`;

const CardBody = styled(Box)`
  width: 100%;
  height: auto;
`;

const PostTitle = styled("h1")`
  width: 100%;
  height: auto;
  margin: 10px 0 5px 5px;
  font-size: 20px;
  font-weight: 700;
  display: inline-block;
  position: relative;

  &::before {
    content: "";
    width: 30%;
    height: 2px;
    border-radius: 3px;
    background-color: #91dc55;
    display: inline-block;
    position: absolute;
    bottom: -8px;
  }
`;

const PostDescription = styled(Box)`
  width: 100%;
  height: auto;
  box-shadow: rgba(145, 220, 85, 0.05) 0px -50px 36px -28px inset;
  margin: 10px 0 10px 5px;
  padding-right: 5px !important;
  padding-left: 5px !important;
  padding-bottom: 3px !important;
  font-size: 14px;

  font-weight: 400;
  line-height: 1.3;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const LineDivider = styled(Divider)`
  width: 90%;
  margin: 0 auto 10px;
`;

const DatePost = styled(Box)`
  width: 100%;
  margin: 5px 0 10px 8px;
  font-size: 12px;
`;
