export function procesarCurrencyCodes() {
    const objetoArrays = [{"currencyCode":"USD","currencyName":"Dolares Americanos","currencyFullName":"Dolares Americanos EF","instrumentCode":"EF","instrumentDescription":"Efectivo","purchaseRate":56.4000,"saleRate":57.2000},{"currencyCode":"USD","currencyName":"Dolares Americanos","currencyFullName":"Dolares Americanos CK","instrumentCode":"CK","instrumentDescription":"Cheque","purchaseRate":55.9000,"saleRate":57.2000},{"currencyCode":"EUR","currencyName":"Euros","currencyFullName":"Euros EF","instrumentCode":"EF","instrumentDescription":"Efectivo","purchaseRate":60.1000,"saleRate":62.5000},{"currencyCode":"CAD","currencyName":"Dolares Canadienses","currencyFullName":"Dolares Canadienses EF","instrumentCode":"EF","instrumentDescription":"Efectivo","purchaseRate":39.0000,"saleRate":41.7000},{"currencyCode":"CHF","currencyName":"Francos Suizos","currencyFullName":"Francos Suizos EF","instrumentCode":"EF","instrumentDescription":"Efectivo","purchaseRate":61.3000,"saleRate":63.5000},{"currencyCode":"GBP","currencyName":"Libras Esterlinas","currencyFullName":"Libras Esterlinas EF","instrumentCode":"EF","instrumentDescription":"Efectivo","purchaseRate":68.5000,"saleRate":71.5000}];
    const currencyCodes = objetoArrays.map(item => item.currencyCode);
    const currencyCodeSet = new Set(currencyCodes);
    const resultado = [];
  
    currencyCodeSet.forEach(currencyCode => {
      const ocurrencias = currencyCodes.filter(code => code === currencyCode);
  
      if (ocurrencias.length > 1) {
        // Si hay duplicados, agrega una 'F' al final de uno de los códigos
        resultado.push(`DOP`);
        resultado.push(`${currencyCode}-Ck`);
        resultado.push(`${currencyCode}-EF`);
      } else {
        resultado.push(currencyCode);
      }
    });
  
    return resultado;
  }
  