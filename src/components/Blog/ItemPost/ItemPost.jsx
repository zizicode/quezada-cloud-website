import { Link } from 'react-router-dom';
import React from 'react'
import parse from 'html-react-parser';

//Css Module
import css from './ItemPost.module.css';

const ItemPost = (props) => {
    const {data} = props;

  return (
    <>
    <div className={css.card}>
        <div className={css.card_image}>
            <img src={data.background} alt="Art-Post" />
        </div>
        <span><li className={css.categoria__}>{data.categoria}</li><li className={css.autor}>{data.autor}</li></span>
        <h2>{data.title}</h2>
        <div className={css.description}>
            {parse(data.body.slice(0,120)+'...')}
        </div>
        <Link to={`/blog/post/`+data.link}><button>Leer Mas</button></Link>
    </div>
    </>
  )
}

export default ItemPost