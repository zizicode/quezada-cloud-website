export function formatCurrency(monto, index, operation, currency) {
  const currencySelect = currency[index];

  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD", // Agrega la moneda (cambia "USD" por la moneda deseada)
    minimumFractionDigits: 2,
  });

  let result;

  // Verificar si el valor es un número válido
  if (isNaN(monto) || monto === "") {
    result = formattedValue.format(0);
    return result;
  }

  switch (operation) {
    case "VENTA":
      result = formattedValue.format(monto * currencySelect.purchaseRate);
      break;
    case "COMPRA":
      result = formattedValue.format(monto / currencySelect.purchaseRate);
      break;
    case "FORMAT":
      result = result = formattedValue.format(monto);
      break;
    default:
      result = monto;
  }

  return result;
}
