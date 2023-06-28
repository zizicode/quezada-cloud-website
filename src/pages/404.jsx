import React from 'react'
import Navbar from '../components/navbar/NavBar';
import { Link } from 'react-router-dom';

//Styles css
import css from './styles_pages/styles-404.module.css';

// image
const svg = require.context("../../src/assets/svg", true);

const PageNotFound = (props) => {
    const href = window.location.pathname;
  return (
    <>
    <Navbar />
        <div className={css.notfound}>
            <h1>Oops, "{href}" esta pagina no fue encontrada.</h1>
            <p>Page Not Found</p>
            <Link to="/"><button>Volver Atras</button></Link>
            <div className={css.svg}>
                <img src={svg`./404-Error2.svg`} alt="svg404" />
            </div>
        </div>
    </>
  )
}

export default PageNotFound