import React from 'react'
import styled from '@emotion/styled'
import { MdLocationPin, MdPhoneInTalk} from 'react-icons/md'
import './rf-footer.css';
import ima_sello from '../../../assets/sello.png'
import { FaPhoneSquareAlt, FaWhatsapp } from 'react-icons/fa';

const rf_footer = () => {

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
   <ContentFooter>
    <SubFooter>
            {/* contact */}
            <div className="footer_content">
              <h3>Contacto <MdPhoneInTalk/></h3>
              <span>Oficina Principal  &nbsp; <FaPhoneSquareAlt />: <a href="tel:8095562702">809 556 2702</a></span>
              <span >Mesa de Divisas  &nbsp; <FaWhatsapp />: 809 556 5111</span>   {/* onClick={handleOpen} */}
              <span>Bávaro y Punta Cana &nbsp; <FaPhoneSquareAlt />: <a href="tel:8095521517">809 552 1517</a></span>
              <span>Correo: &nbsp;<a href="mailto:cambio@quezada.do "> cambio@quezada.do </a></span>
            </div>

          {/* Sucursals */}
            <div className="footer_content">
                <h3>Ubicaciones <MdLocationPin /> </h3>
                <span>- <a href="https://goo.gl/maps/k9RVMBtq2ceSFUQd9" target=" blank">LA ROMANA</a></span>
                <span>- <a href="https://goo.gl/maps/YkJAZAnVHG3Dfx9F8" target=" blank">FRIUSA</a></span>
                <span>- <a href="https://goo.gl/maps/PHxD8bG6prjMU9bJA" target=" blank">SANTO DOMINGO</a></span>
                <span>- <a href="https://goo.gl/maps/ayXNPqdUr94xD663A" target=" blank">HIGÜEY</a></span>
                <span>- <a href="https://goo.gl/maps/TafJHFAr4CWUX4dA9" target=" blank">DOWNTOWN</a></span>
            </div>

            {/* Cestificados / logos */}
            <div className="certification">
              <div className="image">
                <img className="image_footer" src={ima_sello} alt="SIB" />
                <a href="https://certificaciones.uaf.gob.do/certificaciones_so_view.php?editid1=240" target="_blank" rel="nofollow" hreflang="es" title="Cerficación Sujeto Obligado - Unidad de Análisis Financiero">
                  <img className="image_footer" src="https://certificaciones.uaf.gob.do/certificados/UAF00240YQ41.png" alt="ISO" />
                </a>
              </div>
              <div className="rnc">
                <span>RNC: 1-12-10601-2</span>
                <span>No. de registro <br /> SIB: Z1-093-1-00-1201</span>
              </div>
            </div>

    </SubFooter>
   </ContentFooter>
  )
}
export default rf_footer


const ContentFooter = styled.div({
  position:'absolute as absolute;',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
});

const SubFooter = styled("div")`
  width: 100%;
  position: relative;
  padding: 30px 0;

  display: grid;
  grid-template-columns: 33.333% 33.333% 33.333%;
  justify-content: center;
  justify-items: center;
  align-items: flex-start;
  gap: 20px;

  @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
      justify-content: center;
      gap:20px;

      *{
        justify-content: center;
        text-align: center;
      }
  }
`;




