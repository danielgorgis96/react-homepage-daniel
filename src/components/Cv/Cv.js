import React from 'react';
import './Cv.css';
import './Cv.scss';

class Cv extends React.Component {

    


  render() {
    return (
        <body>
          
        <div>

<div class="split left" id="homePage">

    <div class="centered">
        <img class="iconImg" src="talebobble2.png"></img>
        <img class="welcomeImg" src="downloadresume.png"></img>


    </div>
</div>

<div class="split right">
    <div class="centered">


<div class="buttons">
<a href="www.google.com">
<button class="blob-btn">
Download resumé
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
<a href="https://www.youracclaim.com/users/daniel-gorgis">
<button class="blob-btn">
badges and certificates
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

<a href="https://github.com/DanielGorgis"><img className="fvicons" src="git.png"></img></a>




    </div>
      </div>
        </div>

  
       
      </body>

        
    );
  }
}
export default Cv;
