import React, { useEffect, useState, useMemo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { procesarCurrencyCodes } from "../../../../helpers/unstructure-object/UnstructureObject";
import { formatCurrency } from "./formatCurrency";
import "./CalculatorDefault.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const CalculatorDefault = (props) => {
  // Efecto secundario para actualizar "CodeCurrency" y "rates" cuando "props" cambia.
  useEffect(() => {
    setCodeCurrency(procesarCurrencyCodes());
    setRates(props.rates);
  }, [props]);

  // Constante "ConstRates" memoizada para evitar cálculos innecesarios.
  const ConstRates = useMemo(() => {
    return props;
  }, [props]);

  // Estados iniciales
  const [rates, setRates] = useState(ConstRates);
  const [CodeCurrency, setCodeCurrency] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);
  const [monto, setMonto] = useState(10);

  const IsCode = CodeCurrency.length;

  const hoy = new Date();
  const fecha = `${hoy.getDate()}-${hoy.getMonth() + 1}-${hoy.getFullYear()}`;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const estiloTitulo = {
    fontSize: "14px",
    marginTop:'5px'
  };

  const estiloDescripcion = {
    fontWeight: "bold",
    fontSize: "17px",
  };

  const description_result = {
    fontWeight:'600',
  }

  // console.log(props.rates[0].currencyCode);

  return (
    <div className="calculator">
      <div style={{ display: "none" }}>{IsCode}</div>
      <Button onClick={handleOpen}>Calcula tus divisas</Button>
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
              <span className="date">
                {fecha}
                <AiOutlineClose className="Close_modal" onClick={handleClose} />
              </span>
            </div>

            <div className="operacion_content">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <InputLabel id="demo-select-small-label">
                      Divisas
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Divisas"
                      variant="outlined"
                      size="small"
                      value={selectedValue}
                      onChange={handleSelectChange}
                    >
                      {Object.values(rates).map((rate, index) => (
                        <MenuItem key={index} value={index}>
                          {rate.currencyFullName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Monto"
                    type="number"
                    variant="outlined"
                    size="small"
                    defaultValue={monto}
                    onChange={(e) => setMonto(e.target.value)}
                  />
                </Grid>
              </Grid>
            </div>

            <Divider style={{ margin: "20px 0" }} />

            <div className="container_operacion">
              <Grid
                container
                style={{ maxWidth: "95%", margin: "auto" }}
                spacing={1}
                
              >
                <Grid item xs={6} style={{ textAlign: "left", borderRight:'1px solid #E4E4E4' }}>
                  <Typography variant="body1" style={estiloDescripcion}>
                    Venta:
                  </Typography>
                  <Typography variant="h3" style={estiloTitulo}>
                    Monto en <span style={description_result}>{props.rates[selectedValue].currencyCode}:
                    {formatCurrency(
                      monto,
                      selectedValue,
                      "FORMAT",
                      props.rates
                    )}</span>
                  </Typography>
                  <Typography variant="h3" style={estiloTitulo}>
                    Recibes <span style={description_result}>DOP:
                    {formatCurrency(
                      monto,
                      selectedValue,
                      "VENTA",
                      props.rates
                    )}</span>
                  </Typography>
                </Grid>
                {/*  */}
                <Grid item xs={6} style={{ textAlign: "right" }}>
                  <Typography variant="body1" style={estiloDescripcion}>
                    Compra:
                  </Typography>
                  <Typography variant="h3" style={estiloTitulo}>
                    Monto en <span style={description_result}>DOP:{formatCurrency(
                      monto,
                      selectedValue,
                      "FORMAT",
                      props.rates
                    )}</span>
                  </Typography>
                  <Typography variant="body1" style={estiloTitulo}>
                    Recibes <span style={description_result}>{props.rates[selectedValue].currencyCode}:
                    {formatCurrency(
                      monto,
                      selectedValue,
                      "COMPRA",
                      props.rates
                    )}</span>
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                  }}
                >
                  <Typography variant="body1" style={estiloTitulo}>
                    Tasa de venta: <span style={description_result}>DOP: {props.rates[selectedValue].purchaseRate}</span>
                  </Typography>
                  <Typography variant="body1" style={estiloTitulo}>
                    Tasa de compra: <span style={description_result}>DOP: {props.rates[selectedValue].saleRate}</span>
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
          <br />
          <div className="container_solicitar-tasa">
            {/* Contenido del componente "Solicitar" */}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CalculatorDefault;
