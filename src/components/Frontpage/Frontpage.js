import React from 'react';
import '../Frontpage/Frontpage.css'
import '../Frontpage/Frontpage.scss'




class Frontpage extends React.Component{


render(){

    return (

    
        <div>

            <div className="split left" id="homePage">

                <div className="centered">
                    <img alt="" className="iconImg" src="talebobble.png"></img>
                    <img alt="" className="welcomeImg" src="pluto-done.png"></img>


                </div>
            </div>

            <div className="split right">
                <div className="centered">
                
                    

<div className="buttons">
<a href="/Code">
<button className="blob-btn">
   Code and Tech
 <span className="blob-btn__inner">
       <span className="blob-btn__blobs">
           <span className="blob-btn__blob"></span>
           <span className="blob-btn__blob"></span>
           <span className="blob-btn__blob"></span>
           <span className="blob-btn__blob"></span>
       </span>
   </span>
</button>
</a>

<a href="/Cv">
<button className="blob-btn" props="value">
  CV and Experience
 <span className="blob-btn__inner">
       <span className="blob-btn__blobs">
           <span className="blob-btn__blob"></span>
           <span className="blob-btn__blob"></span>
           <span className="blob-btn__blob"></span>
           <span className="blob-btn__blob"></span>
       </span>
   </span>
</button>
</a>

<a href="/Contact">
<button className="blob-btn" props="value">
    
   Contact me
 <span className="blob-btn__inner">
       <span className="blob-btn__blobs">
           <span className="blob-btn__blob"></span>
           <span className="blob-btn__blob"></span>
           <span className="blob-btn__blob"></span>
           <span className="blob-btn__blob"></span>
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