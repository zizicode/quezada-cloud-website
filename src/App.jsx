import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import QuienesSomos from "./pages/quienes-somos";
import QuezadaOnline from "./pages/quezadaonline";
import Sucursales from "./pages/sucursales";
import Contacto from "./pages/contacto";
import Footer from "./components/footer/Footer";
import PageNotFound from "./pages/404";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
// Notificaciones toast
import { ToastContainer } from "react-toastify";
// Dashboard
import useLoginHotkey from "./helpers/hooks/useLoginHotkey";
// Modulo
import moduleRouter from "./module/index";
import PrivateRoute from "./utils/PrivateRouter";

const App = () => {
  const currentUrl = window.location.href;
  const isMobileUrl = currentUrl.includes("/d/");
  useLoginHotkey();

  const modules = moduleRouter();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quezada-online" element={<QuezadaOnline />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="sucursales" element={<Sucursales />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/post/:id" element={<Post />} />
        <Route path="*" element={<PageNotFound />} />
        {/* Rutas de los modulos */}
        {modules.map((routeObject) => {
          const key = Object.keys(routeObject)[0];
          const { path, component, IsPrivate, code } = routeObject[key];

          if (IsPrivate) {
            return (
              <Route
                key={key}
                path={path}
                element={
                  path === `${code}` ? (
                    <Navigate to={`/${code}/`} replace />
                  ) : (
                    <PrivateRoute path={path} code={code} element={component} />
                  )
                }
              />
            );
          } else {
            return <Route key={key} path={path} element={component} />;
          }
        })}
      </Routes>
      <ToastContainer />
      {!isMobileUrl && <Footer />}
    </div>
  );
};

export default App;
