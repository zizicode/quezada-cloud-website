import React from "react";
import axios from "axios";
import { useState } from "react";
import Solicitar from "../../Modal/Solicitar";
import "../../../components/divisas/change-divisas.css";
import UrlChange from '../../../data/changeD';
import changeOfflineD from "../../../data/change-offlineD";

// Iconos
import { AiOutlineClose } from 'react-icons/ai';

// Material UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

// import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

// Styles moral
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
};

// Traer la Url de la api Rates
const baseURL = UrlChange();
const changeOffline = changeOfflineD();

const Calculator = () => {


    // Fecha y hora

    const hoy = new Date();
    const fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();


    const [changeD, setChangeD] = useState(changeOffline);
    const [Sales, setSales] = useState(changeOffline[0]);

    function divisas() {
        // var token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlJhdGVzYXBpIiwiZ2l2ZW5fbmFtZSI6IkFQSSBUYXNhcyIsIkNsaWVudElkIjoiNkQ3QjlGOUYtOEMwRC00NDYwLTkwQkMtOUNGRTI0NzFCRUEzIiwibmJmIjoxNTc2NTkzMTAxLCJleHAiOjE1NzY2Nzk1MDEsImlhdCI6MTU3NjU5MzEwMX0.sc0MnipMqzo8ICQWdRN2UB964QT0v3rjlrO2F0CN5aet4z-9fhFAA1habup4iByalWONtyGHvnPm90F1FH4Ohw';

        try {
            axios.get(`${baseURL}`).then((response) => {
                setChangeD(response.data);
                setSales(response.data[0]);
            }).catch(function (error) {
                console.log('net::ERR_INTERNET_DISCONNECTED');
                setChangeD(changeOffline);
                setSales(changeOffline[0]);
            })

        } catch (error) {
            console.log(error.response);
            return error.response;
        }
    }

    React.useEffect(() => {

        // Inicializar tasas: 
        divisas();
        setInterval(() => {
            divisas();
        }, 180000);

    }, [setChangeD]);


    // Open moral calculator
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //Calculadora funtion
    const formato = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: Sales.currencyCode,
        minimumFractionDigits: 2,
        minimumIntegerDigits: 1,
    });
    const [valorInput, setValorInput] = useState(1);

    function calculator(valor) {

        if (valor <= 0) {
            setValorInput(1)
        } else {
            setValorInput(new Intl.NumberFormat('de-DE').format(valor));
        }
    }



    // Calcular operacion / name
    let name_operation = 'Solicita operacion';
    let components = 'component';




    return (
        <>
            <div className="calculator">
                <Button onClick={handleOpen}>Calcula tus divisas</Button>

                {/* Moral calculadora online */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    data-bs-toggle="modal"
                    aria-hidden="true"
                >
                    <Box sx={style}>
                        <div className="container_calculator">
                            <div className="title_calculator">
                                <h2>Convertidor</h2>
                                <span className="date">{fecha}
                                <AiOutlineClose className="Close_modal"  onClick={handleClose} /></span>
                            </div>

                            <div className="container_converter">
                                <div className="converter_sed">
                                    <Box sx={{ minWidth: 60, width: '27ch' }}>
                                        <FormControl fullWidth>
                                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                                Divisa
                                            </InputLabel>
                                            <NativeSelect
                                                onChange={(e) => setSales(changeD[e.target.value])}
                                                defaultValue={0}
                                                slotProps={{
                                                    button: {
                                                        id: 'select-field-demo-button',
                                                        // TODO: Material UI set aria-labelledby correctly & automatically
                                                        // but MUI Base and Joy UI don't yet.
                                                        'aria-labelledby': 'select-field-demo-label select-field-demo-button',
                                                    },
                                                }}
                                            >
                                                <option value={0}>{changeD[0].currencyCode} - {changeD[0].currencyName}</option>
                                                <option value={1}>{changeD[1].currencyCode} - {changeD[1].currencyFullName}</option>
                                                <option value={2}>{changeD[2].currencyCode} - {changeD[2].currencyName}</option>
                                                <option value={3}>{changeD[3].currencyCode} - {changeD[3].currencyName}</option>
                                                <option value={4}>{changeD[4].currencyCode} - {changeD[4].currencyName}</option>
                                                <option value={5}>{changeD[5].currencyCode} - {changeD[5].currencyName}</option>

                                            </NativeSelect>
                                        </FormControl>
                                    </Box>

                                    <TextField
                                        label="Monto:"
                                        id="outlined-start-adornment"
                                        sx={{ mt: 2, ml: 3, width: '20ch' }}
                                        type="number"
                                        defaultValue={valorInput}
                                        onChange={(e) => calculator(e.target.value)}
                                        // InputProps={{
                                        //     startAdornment: <InputAdornment position="start">DOP:</InputAdornment>,
                                        // }}
                                    />

                                </div>
                                <div className="converter_sale">
                                    <div className="compras">
                                        <div>
                                            <small>Por el monto de:</small>
                                            <p><span>Venta: {Sales.currencyCode}$</span> {valorInput}</p>
                                        </div>

                                        <div>
                                            <small>Recibes:</small>
                                            <p><span>Venta: DOP$</span> {formato.format((Sales.purchaseRate * valorInput))}</p>
                                        </div>
                                    </div>
                                    <div className="ventas">
                                        <div>
                                            <small>Por el monto de:</small>
                                            <p><span>Compra: DOP$</span> {valorInput}</p>
                                        </div>

                                        <div>
                                            <small>Recibes:</small>
                                            <p><span>Compra: {Sales.currencyCode}$</span> {formato.format((valorInput / Sales.saleRate))}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br />

                        <div className="container_solicitar-tasa">
                            <Solicitar name={name_operation} stylec={components}/>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default Calculator