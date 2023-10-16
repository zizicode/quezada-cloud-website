import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import authService from "../../shared/services/authServices";

import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

import confianzaImage from "../../../../assets/HR-1.webp";
import logotipo from "../../../../assets/logo_horizontal.png";

import '../../styles/styles.scss';
import unsubscribe from "../../../../utils/toastNotification";
import { Navigate } from "react-router-dom";

import SessionStorage from "../../../../utils/saveSessionStorage";

const Login = () => {
  let userInfo = localStorage.getItem('userInfo');

  return userInfo ? (<Navigate to='/d/' replace/>) : 
  (
    <LoginComponent>
      <BlurBackground />
      <Content>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string().required("Debe ingresar el nombre de usuario"),
            password: Yup.string().required("Este campo Contraseña es obligatorio"),
          })}
          onSubmit={async (values) => {
            try {
              const server = await authService.login(values.username, values.password);
              // Resto de la lógica después de iniciar sesión
              unsubscribe(server[0].notification);
              const is = SessionStorage(server);
              if(is === 'success') {<Navigate to='/d/' replace/>}else{unsubscribe({type:'error', message:'Error: Session no guardada'});}
            } catch (error) {
              // Manejo de errores\
              unsubscribe(error.response.data[0].notification);
            }
               }}
        >
          <Form>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box sx={{ padding: "10px", margin: "0 0 20px 0" }}>
                <div style={{ width: "100%", padding: "0 15px" }}>
                  <img
                    src={logotipo}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    alt="confianza"
                  />
                </div>
              </Box>
              <div>
                <Field
                  type="text"
                  name="username"
                  label="Nombre de usuario"
                  as={TextField}
                  id="outlined-start-adornment"
                  autoComplete="off"
                  sx={{ m: 1, width: "25ch" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Nick</InputAdornment>
                    ),
                  }}
                />
                <ErrorMessage name="username">
                  {(msg) => <div className="err-message">{msg}</div>}
                </ErrorMessage>

                <Field
                  type={"password"}
                  name="password"
                  label="Contraseña"
                  as={TextField}
                  id="outlined-adornment-password"
                  sx={{ m: 1, width: "25ch" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        Contraseña
                      </InputAdornment>
                    ),
                  }}
                />
                <ErrorMessage name="password">
                  {(msg) => <div className="err-message">{msg}</div>}
                </ErrorMessage>
              </div>
              <Box
                sx={{
                  width: "100%",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  endIcon={<SendIcon />}
                >
                  Enviar
                </Button>
              </Box>
            </Box>
          </Form>
        </Formik>
      </Content>
    </LoginComponent>
  );
};

export default Login;

const LoginComponent = styled.div`
  position: fixed;
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden; /* Evita que el desenfoque se derrame fuera del contenedor */
  position: relative;
  z-index: 1; /* Asegura que el contenido esté en la parte superior */

  /* Otros estilos para el contenido aquí */
`;

const BlurBackground = styled.div`
  position: absolute;
  width: 100% !important;
  height: 100% !important;
  background-image: url(${confianzaImage});
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  filter: blur(10px); /* Ajusta el valor de desenfoque según tus necesidades */
  z-index: -1; /* Coloca el fondo debajo del contenido */
`;

const Content = styled(Box)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 1;
  max-width: 400px !important;
  min-height: 300px;
  background-color: #fff;
`;
