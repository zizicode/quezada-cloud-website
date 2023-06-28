import React, { useState, useEffect } from 'react'
import NavBar from "../components/navbar/NavBar";
//import data from '../components/Blog/ItemPost/post.json';

// Item Post
import ItemPost from '../components/Blog/ItemPost/ItemPost';

// Preload pages
import Loading from "../components/pageLoading/Loading";

//styles css
import css from './styles_pages/styles-blog.module.css';


const Blog = () => {
    // State loadPage
    const [load, setLoad] = useState('Load');
    // Active categorias
    const [active, setActive] = useState('all');

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
            }, 1500);
        }
    })
    //END State loadPage


// Llamando datos de los post del blog.
    const [data, setM] = useState([]);
    const Url = 'https://my-json-server.typicode.com/doblezz/db-json/post';
    const UrlCategorias = 'https://my-json-server.typicode.com/doblezz/db-json/post?categoria=';

    useEffect(() => {
        async function buscarPost() {
            await fetch(Url)
                .then(response => response.json())
                .then(datos => setM(datos))
        }
        buscarPost();
    }, [Url])

// accion de active botones por categoria al igual que los post.
    function change(select) {
        setActive(select);

        if(select === 'all'){
            async function buscarPost() {
                await fetch(Url)
                    .then(response => response.json())
                    .then(datos => setM(datos))
            }
            buscarPost();
        }else{
            async function buscarPost() {
                await fetch(UrlCategorias+select)
                    .then(response => response.json())
                    .then(datos => setM(datos))
            }
            buscarPost();
        }
    }

    return (
        <>
            <Loading load={load} />
            <NavBar />

            <div className={css.header_blog}>
                <h1>Quezada | Nuestro Blog</h1>
                <p>Si deseas recibir novedades Quezada, puedes suscribirte a nuestro newsletter</p>
                <button>¡Suscríbete  aquí!</button>
                <br />
            </div>

            <div className={css.container_all}>
                <div className={css.categorias}>
                    <ul>
                        <li onClick={() => change('all')} className={active === 'all' ? css.active : css.list}>Todo</li>
                        <li onClick={() => change('Finanzas')} className={active === 'Finanzas' ? css.active : css.list}>Finanzas</li>
                        <li onClick={() => change('Noticias')} className={active === 'Noticias' ? css.active : css.list}>Noticias</li>
                        <li onClick={() => change('Novedades')} className={active === 'Novedades' ? css.active : css.list}>Novedades</li>
                    </ul>
                    <hr /><br />

                    <div className={css.container_items}>
                        {
                            data.map((posts, i) => (
                                <ItemPost data={posts} key={i} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog