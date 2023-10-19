import React from "react";
// styles css
import "../../components/footer/footer.css";
// icons Redes
import { FaFacebookF,FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { BsInstagram, BsYoutube } from 'react-icons/bs';

// Settting Material Mii Modal
import RfFooter from "./components/rf-footer";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container_footer">
          {/* contacto */}
          <div className="footer_logo">
            <h2>QUEZADA</h2>
            <p>
              ¡En Quezada, los servicios de cambio a dólar, euro y peso son más rápidos y fáciles que nunca! Contáctanos o visita una de nuestras sucursales.
            </p>
          </div>

          {/* Icons redes */}
          <div className="footer_redes">
            <ul className="footer_list">
              <li><a href="https://www.facebook.com/agentedecambioquezada?mibextid=LQQJ4d" className="facebook" title="Facebok"><FaFacebookF /></a></li>
              <li><a href="https://instagram.com/agentedecambioquezada?igshid=MzRlODBiNWFlZA==" className="instagram" title="Instagram"><BsInstagram /></a></li>
              <li><a href="https://youtube.com/@agentedecambioquezada7757" className="instagram" title="YouTube"><BsYoutube /></a></li>
              <li><a href="https://www.linkedin.com/company/agente-de-cambio-quezada/" className="linkedin" title="Linkedin"><FaLinkedinIn /></a></li>
              <li><a href="https://www.tiktok.com/@agentedecambioquezada?_t=8dgNqCrZio1&_r=1" className="linkedin" title="Tiktok"><FaTiktok /></a></li>
            </ul>
          </div>

          {/* redesing footer */}
          <RfFooter/>
          

        </div>
        <div className="copyritgh">
          <span>Copyright ©  Agente de Cambio Quezada 2023</span>
        </div>
        <div style={{width:'100%', textAlign:'center', fontSize:'.80rem', color:'#1F88DE',fontWeight:'700', padding:'5px 0'}}>created by: <a href="https://github.com/doblezz" style={{color:'#1F88DE'}}> zizicode</a></div>
      </footer>
    </>
  );
};

export default Footer;
