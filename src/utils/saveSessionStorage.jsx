import unsubscribe from "./toastNotification";

export default function SessionStorage(props) {
    const data = props[0];
    const {token, userInfo, } = data;
    const expiresToken = userInfo.timeExpires;
    const notification = {type: 'success', message: 'Usuario Guardado com exito'}

    if(token && userInfo) { 
        localStorage.setItem('token', token);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        localStorage.setItem('expiryTime', expiresToken);

        unsubscribe(notification);
        return "success";
    }
}