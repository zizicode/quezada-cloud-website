export function formatCurrency(monto, index, operation, currency) {
  const currencySelect = currency[index];

  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency:currencySelect.currencyCode, // Usar la moneda deseada del objeto currencySelect
    minimumFractionDigits: 2,
  });

  let result;
  // Verificar si el valor es un número válido
  if (monto === "") {
    result = formattedValue.format(0);
    return result;
  }

  switch (operation) {
    case "VENTA":
      result = formattedValue.format(monto * currencySelect.saleRate);
      break;
    case "COMPRA":
      result = formattedValue.format( monto /currencySelect.purchaseRate );
      break;
    case "FORMAT":
      result = formattedValue.format(monto);
      break;
    default:
      console.log("Operación no reconocida");
      result = "";
  }

  return result;
}
