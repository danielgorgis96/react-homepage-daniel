import React from 'react';
import '../Frontpage/Frontpage.css'
import '../Frontpage/Frontpage.scss'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';




class Frontpage extends React.Component{


render(){

    return (

    
        <div>

            <div class="split left" id="homePage">

                <div class="centered">
                    <img class="iconImg" src="talebobble.png"></img>
                    <img class="welcomeImg" src="pluto-done.png"></img>


                </div>
            </div>

            <div class="split right">
                <div class="centered">
                
                    

<div class="buttons">
<a href="/Code">
<button class="blob-btn">
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
</a>

<a href="/Cv">
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
</a>

<a href="/Contact">
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
</a>



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

          
                </div>
                  </div>
                    </div>




)
}
}
export { Frontpage as default };