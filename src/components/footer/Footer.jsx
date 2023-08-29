import React from "react";

// styles css
import "../../components/footer/footer.css";
import ima_sello from '../../assets/sello.png'


// icons Redes
import { FaFacebookF, FaLocationArrow, FaLinkedinIn, FaPhoneSquareAlt, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs';
import {HiPhone} from 'react-icons/hi';

// Material Mui Modal
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// Settting Material Mii Modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,
};

// import {MdOutlineMail} from 'react-icons/md';

const Footer = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {
        <script>
          alert('Hola');
        </script>
      }
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

          {/* Logotipo footer */}
          <div className="footer_contact">
            <div className="footer_sucursal">
              <h3>Ubicaciones</h3>
              <span><a href="https://goo.gl/maps/k9RVMBtq2ceSFUQd9" target=" blank">LA ROMANA</a>&nbsp; &nbsp;  <FaLocationArrow /></span>
              <span><a href="https://goo.gl/maps/YkJAZAnVHG3Dfx9F8" target=" blank">FRIUSA</a>&nbsp; &nbsp;  <FaLocationArrow /></span>
              <span><a href="https://goo.gl/maps/PHxD8bG6prjMU9bJA" target=" blank">SANTO DOMINGO</a>&nbsp; &nbsp;  <FaLocationArrow /></span>
              <span><a href="https://goo.gl/maps/ayXNPqdUr94xD663A" target=" blank">HIGÜEY</a>&nbsp; &nbsp;  <FaLocationArrow /></span>
              <span><a href="https://goo.gl/maps/TafJHFAr4CWUX4dA9" target=" blank">DOWNTOWN</a>&nbsp; &nbsp;  <FaLocationArrow /></span>
            </div>


            <div className="Contacto">
              <h3>Contacto</h3>
              <span>Oficina Principal  &nbsp; <FaPhoneSquareAlt />: <a href="tel:8095562702">809 556 2702</a></span>
              <span onClick={handleOpen}>Mesa de Divisas  &nbsp; <FaWhatsapp />: 809 556 5111</span>
              <span>Oficinas Bávaro y Punta Cana &nbsp; <FaPhoneSquareAlt />: <a href="tel:8095521517">809 552 1517</a></span>
              <span>Correo: &nbsp;<a href="mailto:cambio@quezada.do "> cambio@quezada.do </a></span>
            </div>

            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className="modalW">
                  <Typography id="modal-modal-title" variant="h6" component="h1">
                    Favor Elegir:
                  </Typography>
                  <div className="optionW">
                    <a href="tel:8095562702"><HiPhone/></a>
                    <a href="https://api.whatsapp.com/send/?phone=18095565111&text&app_absent=0"><BsWhatsapp/></a>
                  </div>
                </Box>
              </Modal>
            </div>

            <div className="certification">
              <div className="image_footer">
                <img className="image_footer" src={ima_sello} alt="SIB" />
              </div>
              <div className="rnc">
                <span>RNC: 1-12-10601-2</span>
                <span>No. de registro <br /> SIB: Z1-093-1-00-1201</span>
              </div>
            </div>
          </div>
        </div>
        <div className="copyritgh">
          <span>Copyright ©  Agente de Cambio Quezada 2023</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
