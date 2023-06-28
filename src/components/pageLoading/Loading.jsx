import React from 'react'
import './pageLoading.css';

const Loading = (props) => {
  var {load} = props;


  return (
    <>
      <div className={load}>
        <div className="preloader">
          <div className="spinner"></div>
        </div>
      </div>
    </>
  )
}

export default Loading