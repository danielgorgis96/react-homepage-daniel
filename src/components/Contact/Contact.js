import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <aside class='profile-card'>
        <header>
          <a target='_blank' href='https://www.linkedin.com/in/daniel-gorgis-2947b0153/'>
            <img
            
              src='https://media-exp1.licdn.com/dms/image/C4D03AQEUh9sGr4FR4w/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=VnQsgoZJRSX-5DHMgn59qbc6mtxjSrIlPS8cI-Sn9kY'
              class='hoverZoomLink'
            ></img>
          </a>

          <h1>Daniel Gorgis</h1>

          <h2>Softwaree Developer/Consultant</h2>
          <h5> <a href="mailto:daniel.gorgis-cic@ibm.com">Mail me!</a> </h5>
     
         
          
        </header>

        <div class='profile-bio'></div>
      </aside>
    );
  }
}
export default Contact;
