import React, {useState} from 'react'
import '../../../components/sucursales/Mapview/MapView.css';

// Leaflet
//18.42788591409337, -68.97922345868415
import {MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Markers
import Markers from '../../../components/sucursales/Markers/Markers';
import data from '../Markers/marker.json';

const MapView = ({positionMarket}) => {
    //18.71071956642408, -69.09137675797635
    //"Marcar": [{"lat":"18.71071956642408","lng":"-69.09137675797635", "zoom":"9"}]
    //var position = ['18.71071956642408', '-69.09137675797635']
    //[{"geometry":[19.71071956642408 , -69.09137675797635],"zoom":"9"}]

    const [position, setPosition] = useState(positionMarket);


    function clickmarker(data){
        setPosition(data);
        console.log('click')
        setPosition(positionMarket)
    }
    

  return (
    <>
    <MapContainer center={[position[0].geometry[0],position[0].geometry[1]]} zoom={position[0].zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <Markers puntero={data.punteros} childcliked={() => clickmarker(data)} />
    </MapContainer>
    </>
  )
}

export default MapView;