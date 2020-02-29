import React from 'react';
import '../Button/Button.css'
import '../Button/Button.scss'




const btn = (props) => {


    return (


<div class="buttons">

     <button class="blob-btn" onClick ={() => this.props.shoot()} >
        Code and Tech
      <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
            </span>
        </span>
    </button>
  
    <button class="blob-btn" props="value">
       CV and Experience
      <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
            </span>
        </span>
    </button>

    <button class="blob-btn" props="value">
        Contact me
      <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
            </span>
        </span>
    </button>

 
    
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
        </defs>
    </svg>
    </div>


    );
};

export default btn;