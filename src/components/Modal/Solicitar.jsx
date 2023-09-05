import React from 'react'

// icon react
import { IoIosArrowDown } from 'react-icons/io';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';

// Materual @MUI UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// Css
import "./solicitar.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 390,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


const Solicitar = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let xprops = props;
    let sprops = props;

    if(xprops.name){
        xprops = xprops.name;
    }else{
        xprops = 'Solicitar Tasa';
    }

    if(sprops.stylec){
        sprops = sprops.stylec;
    }else{
        sprops = '';
    }


    return (
        <div className="description_swiper">
            <Button onClick={handleOpen} className={sprops + ' solicitar'}>{xprops} &nbsp; <IoIosArrowDown /></Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="icon_contact">
                        <FaPhoneAlt />
                    </div>
                    <br />

                    <div className='solicitar_modal'>
                        <Typography id="modal-modal-title" className='title' variant="h7" component="h4">
                            Solicite su tasa preferencial por el formulario web
                        </Typography>

                        <div className="preference">
                            <a href="https://qh788.infusionsoft.app/app/form/exchange-rate-request-formformulario-solicitud-de-tasaoperacion?cookieSearchStarted=true&cookieUUID=6febfbfa-b560-4d8c-944a-4497d597d4a3">Persona física</a>
                            <a href="https://qh788.infusionsoft.app/app/form/solicitud-de-tasa-persona-juridica">Persona jurídica</a>
                        </div>

                        <Typography id="modal-modal-title" className='title' variant="h7" component="h4">
                            Contáctanos por WhatsApp
                        </Typography>

                        <a href='https://api.whatsapp.com/send/?phone=18095565111&text&app_absent=0'>Via WhatsApp <IoLogoWhatsapp /></a>

                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Solicitar