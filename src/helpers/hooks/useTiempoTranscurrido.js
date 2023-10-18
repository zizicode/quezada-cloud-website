import { useState, useEffect } from 'react';
import moment from 'moment';

function useTiempoTranscurrido(fechaEnTexto) {
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(null);

  useEffect(() => {
    if (fechaEnTexto) {
      const fechaPublicacion = moment(fechaEnTexto);
      const fechaActual = moment();

      const minutosTranscurridos = fechaActual.diff(fechaPublicacion, 'minutes');

      let resultado;

      if (minutosTranscurridos < 1) {
        resultado = 'Hace unos momentos';
      } else if (minutosTranscurridos < 60) {
        resultado = `Hace ${minutosTranscurridos} ${minutosTranscurridos === 1 ? 'minuto' : 'minutos'}`;
      } else if (minutosTranscurridos < 60 * 24) {
        const horasTranscurridas = Math.floor(minutosTranscurridos / 60);
        resultado = `Hace ${horasTranscurridas} ${horasTranscurridas === 1 ? 'hora' : 'horas'}`;
      } else {
        const diasTranscurridos = Math.floor(minutosTranscurridos / (60 * 24));
        resultado = `Hace ${diasTranscurridos} ${diasTranscurridos === 1 ? 'día' : 'días'}`;
      }

      setTiempoTranscurrido(resultado);
    }
  }, [fechaEnTexto]);

  return tiempoTranscurrido;
}

export default useTiempoTranscurrido;