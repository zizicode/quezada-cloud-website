import React from 'react'
import Solicitar from '../../Modal/Solicitar';

// icons
import { FaLocationArrow} from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

// Styles
import Styles from './ItemSucursales.module.css';


const ItemSucursales = ({handlePosition}) => {


    // Importar imagenes Sucursales
    const image = require.context('../../../assets/sucursales', true);


    return (
        <div className={Styles.sucursales}>
            <div className={Styles.item_container}>

                <div className={Styles.card_item_sucursal}>
                    <div className={Styles.label_graphic}>
                        <div className={Styles.c_img}>
                            <img src={image`./romana.jpg`} alt="La Romana" />
                        </div>
                        <div className={Styles.icon_location}>
                            <MdLocationPin/>
                        </div>
                    </div>

                    <div className={Styles.label_info}>
                        <div className={Styles.container_info_sucursal}>
                            <div className={Styles.title}>
                                <p className={Styles.span}>Sucursal Quezada</p>
                                <h2>La Romana</h2>
                            </div>
                            <div className="calle">
                                <p className={Styles.span}>Direccion</p>
                                <h2>C/ Dr. Gonzalvo #13</h2>
                            </div>

                            <div>
                                <p className={Styles.span}>Horario</p>
                                <div>
                                    <p className={Styles.span}>Lun. -  Sáb.</p>
                                    <h2>7:30AM a 8:00 PM</h2>
                                    <p className={Styles.span}>Domingos</p>
                                    <h2>7:30 AM 1:00 PM</h2>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.contacto_sucursal}  onClick={() => {handlePosition([{"geometry":[19.71071956642408 , -69.09137675797635],"zoom":"9"}])}} >
                            <p><a href="https://goo.gl/maps/k9RVMBtq2ceSFUQd9" target=" blank">COMO LLEGAR</a></p>&nbsp;&nbsp; <FaLocationArrow />
                        </div>
                    </div>
                </div>

                {/* item 2 */}

                <div className={Styles.card_item_sucursal}>
                    <div className={Styles.label_graphic}>
                        <div className={Styles.c_img}>
                            <img src={image`./friusa.jpeg`} alt="Friusa" />
                        </div>
                        <div className={Styles.icon_location}>
                            <MdLocationPin />
                        </div>
                    </div>
                    
                    <div className={Styles.label_info}>
                        <div className={Styles.container_info_sucursal}>
                            <div className={Styles.title}>
                                <p className={Styles.span}>Sucursal Quezada</p>
                                <h2>Friusa</h2>
                            </div>
                            <div className="calle">
                                <p className={Styles.span}>Direccion</p>
                                <h2>Av. Estados Unidos.</h2>
                            </div>

                            <div>
                                <p className={Styles.span}>Horario</p>
                                <div>
                                    <p className={Styles.span}>Lun. -  Sáb.</p>
                                    <h2>7:30 AM - 9:00 PM</h2>
                                    <p className={Styles.span}>Domingos</p>
                                    <h2>8:00 AM - 8:00 PM</h2>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.contacto_sucursal}>
                        <p><a href="https://goo.gl/maps/YkJAZAnVHG3Dfx9F8" target=" blank">COMO LLEGAR</a></p>&nbsp;&nbsp; <FaLocationArrow />
                        </div>
                    </div>
                </div>

                {/* item 3 */}

                <div className={Styles.card_item_sucursal}>
                    <div className={Styles.label_graphic}>
                        <div className={Styles.c_img}>
                            <img src={image`./higuey.jpeg`} alt="Higuey" />
                        </div>
                        <div className={Styles.icon_location}>
                            <MdLocationPin />
                        </div>
                    </div>
                    
                    <div className={Styles.label_info}>
                        <div className={Styles.container_info_sucursal}>
                            <div className={Styles.title}>
                                <p className={Styles.span}>Sucursal Quezada</p>
                                <h2>Higüey</h2>
                            </div>
                            <div className="calle">
                                <p className={Styles.span}>Direccion</p>
                                <h2>C/ 27 de febrero #103</h2>
                            </div>

                            <div>
                                <p className={Styles.span}>Horario</p>
                                <div>
                                    <p className={Styles.span}>Lun. - Vie.</p>
                                    <h2>8:00AM a 6:00 PM</h2>
                                    <p className={Styles.span}>Sábados</p>
                                    <h2>8:30 AM 3:00 PM</h2>
                                    <p className={Styles.span}>Domingos</p>
                                    <h2>9:00 AM 3:00 PM</h2>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.contacto_sucursal}>
                        <p><a href="https://goo.gl/maps/ayXNPqdUr94xD663A" target=" blank">COMO LLEGAR</a></p>&nbsp;&nbsp; <FaLocationArrow />
                        </div>
                    </div>
                </div>

                {/* item 4 */}

                <div className={Styles.card_item_sucursal}>
                    <div className={Styles.label_graphic}>
                        <div className={Styles.c_img}>
                            <img src={image`./downtown.jpg`} alt="downtown" />
                        </div>
                        <div className={Styles.icon_location}>
                            <MdLocationPin />
                        </div>
                    </div>
                    
                    <div className={Styles.label_info}>
                        <div className={Styles.container_info_sucursal}>
                            <div className={Styles.title}>
                                <p className={Styles.span}>Sucursal Quezada</p>
                                <h2>Downtown</h2>
                            </div>
                            <div className="calle">
                                <p className={Styles.span}>Direccion</p>
                                <h2>Av. Barcelo frente a la estacion de combustible sunix</h2>
                            </div>

                            <div>
                                <p className={Styles.span}>Horario</p>
                                <div>
                                    <p className={Styles.span}>Lun. - Sáb.</p>
                                    <h2>7:00AM a 8:00 PM</h2>
                                    <p className={Styles.span}>Domingos</p>
                                    <h2>8:00 AM 7:00 PM</h2>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.contacto_sucursal}>
                        <p><a href="https://goo.gl/maps/TafJHFAr4CWUX4dA9" target=" blank">COMO LLEGAR</a></p>&nbsp;&nbsp; <FaLocationArrow />
                        </div>
                    </div>
                </div>


                {/* item 5 */}

                <div className={Styles.card_item_sucursal}>
                    <div className={Styles.label_graphic}>
                        <div className={Styles.c_img}>
                            <img src={image`./santodomingo.jpeg`} alt="Santo-domingo" />
                        </div>
                        <div className={Styles.icon_location}>
                            <MdLocationPin />
                        </div>
                    </div>
                    
                    <div className={Styles.label_info}>
                        <div className={Styles.container_info_sucursal}>
                            <div className={Styles.title}>
                                <p className={Styles.span}>Sucursal Quezada</p>
                                <h2>Santo Domingo</h2>
                            </div>
                            <div className="calle">
                                <p className={Styles.span}>Direccion</p>
                                <h2>Plaza Cataluña</h2>
                            </div>

                            <div>
                                <p className={Styles.span}>Horario</p>
                                <div>
                                    <p className={Styles.span}>Lun. - Vie.</p>
                                    <h2>8:30AM a 5:30 PM</h2>
                                    <p className={Styles.span}>Sábados</p>
                                    <h2>9:00 AM 1:00 PM</h2>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.contacto_sucursal}>
                        <p><a href="https://goo.gl/maps/PHxD8bG6prjMU9bJA" target=" blank">COMO LLEGAR</a></p>&nbsp;&nbsp; <FaLocationArrow />
                        </div>
                    </div>
                </div>


            </div>
            <div className="container_solicitar-tasa">
              <Solicitar />
            </div>
        </div>
    )
}

export default ItemSucursales