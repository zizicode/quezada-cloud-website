import axios from 'axios';

export const fetchTasas = async (setTasas, tasasOffline) => {


    try {
        const response = await axios.get('http://quezada.dyndns.info:5000/obtenerDivisas'); // Reemplaza 'URL_DE_LA_API' con la URL real de la API
        const newTasas = response.data;

        // Comprobar si las tasas son diferentes de las anteriores antes de actualizar el estado
        if (!areTasasEqual(newTasas, setTasas)) {
            setTasas(newTasas);
        }
    } catch (error) {
        console.error('Error al cargar la API:', error);
        // Si hay un error, usar las tasasOffline como datos de respaldo
        if (tasasOffline.length > 0) {
            setTasas(tasasOffline[0]);
        }
    }
};

// Función para comparar si las tasas son iguales
const areTasasEqual = (tasas1, tasas2) => {
    // Implementa la comparación adecuada según la estructura de tus datos de tasa
    // Por ejemplo, si las tasas son un array de objetos, puedes usar JSON.stringify
    return JSON.stringify(tasas1) === JSON.stringify(tasas2);
};