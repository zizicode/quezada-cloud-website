
import React, {useState, useEffect} from 'react'
import NavBar from '../components/navbar/NavBar';
import ItemSucursales from '../components/sucursales/ItemSucursales/ItemSucursales';
import Loading from "../components/pageLoading/Loading";

// Styles
import styles from '../../src/pages/styles_pages/styles-sucursales.module.css';
import MapView from '../components/sucursales/Mapview/MapView';


const Sucursales = () => {
  // State loadPage
  const [load, setLoad] = useState('Load');

  if (load === 'Load') {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          setLoad('false');
        }, 1500);
      }
    }
  }

  useEffect(() => {
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setLoad('false');
      }, 1000);
    }
  })
  //END State loadPage
  
  const [market, setMarket] = useState(
    [{"geometry":[18.71071956642408 , -69.09137675797635],"zoom":"9"}]
);
 
// SetPosition
function handlePosition(dato){
  setMarket(dato);
}


  return (
    <>
    
    <Loading load={load} />
    <NavBar />
    <header className={styles.header}>
        <MapView positionMarket={market} />
    </header>
    <div>
      <ItemSucursales handlePosition={handlePosition}/>
    </div>
    </>
    
  )
}

export default Sucursales;

