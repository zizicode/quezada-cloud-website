export function startTimer(setTiempoRestante, clearSessionData) {
    const expiryTime = localStorage.getItem('expiryTime');
    if (expiryTime) {
      const interval = setInterval(() => {
        const tiempoActual = Date.now();
        const tiempoRestanteEnMilisegundos = expiryTime - tiempoActual;
  
        if (tiempoRestanteEnMilisegundos <= 0) {
          clearInterval(interval);
          setTiempoRestante(0);
          clearSessionData(); // Llama a la función para eliminar los datos de la sesión
        } else {
          const minutosRestantes = Math.floor(tiempoRestanteEnMilisegundos / 60000);
          setTiempoRestante(minutosRestantes);
        }
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }
  }