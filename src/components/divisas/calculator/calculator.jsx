import React from "react";
import { useState, useEffect } from "react";
import Solicitar from "../../Modal/Solicitar";
import "../../../components/divisas/change-divisas.css";
import changeOfflineD from "../../../data/change-offlineD";

// Iconos
import { AiOutlineClose } from "react-icons/ai";

// Material UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";


// Styles moral
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

// Traer la Url de la api Rates Offline
const changeOffline = changeOfflineD();

const Calculator = (props) => {
  const [rates, setRates] = useState(changeOffline);
  const [selectedCurrency, setSelectedCurrency] = useState(0);
  const [operationType, setOperationType] = useState("buy");
  const [localCurrencyValue, setLocalCurrencyValue] = useState(10);

  useEffect(() => {
    setRates(props.rates);
  }, [props.rates]);

  // Boton de solicitar operacion / name
  let name_operation = "Solicitar operación";
  let components = "component";

  // Fecha y hora
  const hoy = new Date();
  const fecha =
    hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();

  // Open moral calculator
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleOperationChange = (event) => {
    setOperationType(event.target.value);
  };

  const handleLocalCurrencyInputChange = (event) => {
    const value = parseFloat(event.target.value);
    setLocalCurrencyValue(value);
  };

  const handleBlur = () => {
    const parsedValue = parseFloat(localCurrencyValue);

    // Verificar si el valor es menor a 1 o está vacío
    if (isNaN(parsedValue) || parsedValue === "" || parsedValue < 1) {
      setLocalCurrencyValue(1); // Establecer el valor a 1
    }
  };

  const calculateLocalCurrencyValue = (value, currency) => {
    const selectedCurrencyData = rates[currency];

    if (isNaN(value)) {
      return "0.00";
    } else {
      const exchangeRate =
        operationType === "buy"
          ? selectedCurrencyData.purchaseRate
          : selectedCurrencyData.saleRate;
      const index =
        operationType === "buy" ? value / exchangeRate : value * exchangeRate;
      const values = new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(index);

      return values;
    }
  };

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
                <span className="date">
                  {fecha}
                  <AiOutlineClose
                    className="Close_modal"
                    onClick={handleClose}
                  />
                </span>
              </div>

              <div className="container_converter">
                <div className="converter_sed">
                  <div className="type_operation">
                    <div>
                      <input
                        type="radio"
                        id="buy"
                        name="operation"
                        value="buy"
                        checked={operationType === "buy"}
                        onChange={handleOperationChange}
                      />
                      <label htmlFor="buy">Venta</label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="sell"
                        name="operation"
                        value="sell"
                        checked={operationType === "sell"}
                        onChange={handleOperationChange}
                      />
                      <label htmlFor="sell">Compra</label>
                    </div>
                  </div>
                </div>
                <div className="converter_sale">
                  <div className="container_value_operation">
                    <div>
                      <label>Monto en {operationType === "buy"
                          ? "Pesos"
                          : rates[selectedCurrency].currencyCode}</label>
                      <input
                        type="number"
                        style={{ textAlign: "center" }}
                        value={localCurrencyValue}
                        onChange={handleLocalCurrencyInputChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div>
                      <label>Seleccione una divisa:</label>
                      <select
                        value={selectedCurrency}
                        onChange={handleCurrencyChange}
                      >
                        {Object.keys(rates).map((currency) => (
                          <option key={currency} value={currency}>
                            {rates[currency].currencyFullName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="result_calculo">
                    <br />
                    <div>
                      <div
                        className={
                          Number(
                            calculateLocalCurrencyValue(
                              localCurrencyValue,
                              selectedCurrency
                            )
                          ) < 1.0
                            ? "danger"
                            : "success"
                        }
                      >
                        {calculateLocalCurrencyValue(
                          localCurrencyValue,
                          selectedCurrency
                        )}{" "}
                        {operationType === "sell"
                          ? "DOP$"
                          : rates[selectedCurrency].currencyCode + "$"}
                      </div>
                      <div>Total a recibir</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div className="container_solicitar-tasa">
              <Solicitar name={name_operation} stylec={components} />
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Calculator;
