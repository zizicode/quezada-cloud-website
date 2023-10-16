import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// interface ToastItem {
//     id: Id;
//     content: React.ReactNode;
//     theme?: Theme;
//     type?: TypeOptions;
//     isLoading?: boolean;
//     containerId?: Id;
//     data: Data;
//     icon?: React.ReactNode | false;
//     status: "added" | "removed" | "updated" 
// }

const unsubscribe = (props) => {
    switch (props.type) {
      case "success":
        // Nueva notificación de inicio de sesión
        toast.success(props.message, { autoClose: 3000 });
        // Puedes realizar acciones adicionales después del inicio de sesión exitoso aquí
        break;
      case "info":
        toast.error(props.message, { autoClose: 3000 });
        // Puedes realizar acciones adicionales en caso de error de inicio de sesión aquí
        break;
      case "error":
        // toast has been removed
        toast.error(props.message, { autoClose: 4000 });
        break;
    }
  };


  export default unsubscribe;