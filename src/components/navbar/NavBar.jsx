<<<<<<< HEAD
import React from "react";
import { Link } from 'react-router-dom';
import logoH from "../../assets/logo_horizontal.png";
import "./navbar.css";
import { FaTimes, FaPhoneAlt, FaBloggerB } from "react-icons/fa";
import { AiOutlineHome } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { IoLocationSharp } from 'react-icons/io5';
import { GoThreeBars } from "react-icons/go";
import { useRef } from "react";

// Somos
import styles from '../../pages/styles_pages/styles_quienes_somos.module.css';

const Navbar = () => {
    const navRef = useRef();
    const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
};


  return (
    <>
      <header className={styles.header_navbar}>

      <div className="barra_up"></div>
      <div className="content__navbar">
        <div className="image__logo">
        <Link to="/"><img src={logoH} alt="logo" id="logotipo_header" /></Link>
        </div>

        <nav ref={navRef}>
          <Link to="/"><AiOutlineHome className="icon__a" />Inicio</Link>
          <Link to="/quezada-online"><TbWorld className="icon__a" />Quezada Online</Link>
          <Link to="/quienes-somos"><TiInfoLargeOutline className="icon__a" />¿Quiénes somos?</Link>
          <Link to="/sucursales"><IoLocationSharp className="icon__a" />Sucursales</Link>
          <Link to="/contacto"><FaPhoneAlt className="icon__a" />Contacto</Link>
          <Link to="/blog"><FaBloggerB className="icon__a" />Blog</Link>
          <button className="nav__btn fatime" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <button className="nav__btn nav__btn_close" onClick={showNavbar}>
          <GoThreeBars />
        </button>
      </div>
    </header>
    </>
  );
};

export default Navbar;
=======
import React from "react";
import { Link } from 'react-router-dom';
import logoH from "../../assets/logo_horizontal.png";
import "./navbar.css";
import { FaTimes, FaPhoneAlt, FaBloggerB } from "react-icons/fa";
import { AiOutlineHome } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { IoLocationSharp } from 'react-icons/io5';
import { GoThreeBars } from "react-icons/go";
import { useRef } from "react";

// Somos
import styles from '../../pages/styles_pages/styles_quienes_somos.module.css';

const Navbar = () => {
    const navRef = useRef();
    const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
};


  return (
    <>
      <header className={styles.header_navbar}>

      <div className="barra_up"></div>
      <div className="content__navbar">
        <div className="image__logo">
        <Link to="/"><img src={logoH} alt="logo" id="logotipo_header" /></Link>
        </div>

        <nav ref={navRef}>
          <Link to="/"><AiOutlineHome className="icon__a" />Inicio</Link>
          <Link to="/quezada-online"><TbWorld className="icon__a" />Quezada Online</Link>
          <Link to="/quienes-somos"><TiInfoLargeOutline className="icon__a" />¿Quiénes somos?</Link>
          <Link to="/sucursales"><IoLocationSharp className="icon__a" />Sucursales</Link>
          <Link to="/contacto"><FaPhoneAlt className="icon__a" />Contacto</Link>
          <Link to="/blog"><FaBloggerB className="icon__a" />Blog</Link>
          <button className="nav__btn fatime" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <button className="nav__btn nav__btn_close" onClick={showNavbar}>
          <GoThreeBars />
        </button>
      </div>
    </header>
    </>
  );
};

export default Navbar;
>>>>>>> 42c6585 (Update main home)
