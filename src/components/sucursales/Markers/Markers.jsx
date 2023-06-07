import React from "react";
import * as leaflet from "leaflet";
import { Marker, Popup } from "react-leaflet";

import "leaflet/dist/images/marker-shadow.png";

leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("../../../assets/Mapview/marker-icon.png"),
  iconUrl: require("../../../assets/Mapview/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Markers = (props) => {
  const { puntero, clickmarker } = props;
//[{"geometry": puntero.geometry,"zoom": "16"}]
  const marker = puntero.map((puntero, i) => (
    <Marker key={i} position={puntero.geometry} onClick={()=>clickmarker("hola")}>
        <Popup>
            {puntero.description}
        </Popup>
    </Marker>
  ));
  return marker;
};

export default Markers;