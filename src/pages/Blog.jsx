import React from 'react'
import NavBar from "../components/navbar/NavBar";
//styles css
import css from './styles_pages/styles-blog.module.css';


const Blog = () => {
    return (
        <>
            <NavBar />

            <div className={css.header_blog}>
                <h1>Quezada | Nuestro Blog</h1>
                <p>Si deseas recibir novedades Quezada, puedes suscribirte a nuestro newsletter</p>
                <button>¡Suscríbete  aquí!</button>
                <br />
                {/* <div style={{display:"none"}}>{data}</div> */}
            </div>

        </>
    )
}

export default Blog