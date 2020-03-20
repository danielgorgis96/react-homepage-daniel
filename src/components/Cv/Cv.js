import React from 'react';
import './Cv.css';
import './Cv.scss';

class Cv extends React.Component {

    


  render() {
    return (
        <div>
          
        <div>

<div className="split left" id="homePage">

    <div className="centered">
        <img alt="" className="iconImg" src="talebobble2.png"></img>
        <img alt="" className="welcomeImg" src="downloadresume.png"></img>


    </div>
</div>

<div className="split right">
    <div className="centered">


<div className="buttons">
<a href="pdf.pdf">
<button className="blob-btn">
Download resumé
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
<a href="https://www.youracclaim.com/users/daniel-gorgis">
<button className="blob-btn">
badges and certificates
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

<a href="https://github.com/DanielGorgis"><img alt="" className="fvicons" src="git.png"></img></a>




    </div>
      </div>
        </div>

  
       
      </div>

        
    );
  }
}
export default Cv;
