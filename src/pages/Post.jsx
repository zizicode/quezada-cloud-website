import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar/NavBar';
//import parser from 'html-react-parser';
//import axios from 'axios';

// iconos
import {BsFacebook, BsLinkedin, BsInstagram} from 'react-icons/bs';

// Preload pages
import Loading from "../components/pageLoading/Loading";

// css
import css from './styles_pages/styles-post.module.css';

//traer imagenes
// const Image = require.context("../../src/assets", true);

const Post = () => {
    const [post, setPost] = useState([]);
    const params = useParams();
    const Url = 'https://my-json-server.typicode.com/doblezz/db-json/post?link='+params.id;
    // State loadPage
    const [load, setLoad] = useState('Load');

    if (load === 'Load') {
        document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
                setTimeout(() => {
                    setLoad('false');
                }, 1600);
            }
        }
    }

    useEffect(() => {
        if (document.readyState === 'complete') {
            setTimeout(() => {
                setLoad('false');
            }, 1600);
        }
    })
    //END State loadPage


    useEffect(() => {
        async function buscarPost(){
           await fetch(Url)
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setPost(data[0]))
        }
        buscarPost();
      },[Url])
    

      
    return (
        <>
        <Loading load={load} />
        <Navbar />
            <div className={css.container_all}>
                <div className={css.header}>
                    <div className={css.container_img}>
                        <img src={post.background} alt={post.link} />
                    </div>
                </div>

                <div className={css.container_body}>
                    <h1>{post.title} <label><span>Publicado</span><span>{post.date}</span></label></h1>

                    <div className={css.redes}>
                        <h2>Redes</h2>
                        <ul>
                            <li><a href="#2" className={css.facebook}><BsFacebook /></a></li>
                            <li><a href="#2" className={css.linkedin}><BsLinkedin /></a></li>
                            <li><a href="#2" className={css.instagram}><BsInstagram /></a></li>
                        </ul>
                    </div>
                    {/* Contenido del post */}

                    <div className={css.body}>

                    <div dangerouslySetInnerHTML={{__html: post.body}}></div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Post