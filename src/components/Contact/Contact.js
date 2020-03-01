import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <aside class='profile-card'>
        <header>
          <a target='_blank' href='#'>
            <img
              alt =""
              src='https://media-exp1.licdn.com/dms/image/C4D03AQEUh9sGr4FR4w/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=VnQsgoZJRSX-5DHMgn59qbc6mtxjSrIlPS8cI-Sn9kY'
              class='hoverZoomLink'
            ></img>
          </a>

          <h1>Daniel Gorgis</h1>

          <h2>Softwaree Developer/Consultant</h2>
          <h5>I like to code..</h5>
        </header>

        <div class='profile-bio'></div>
      </aside>
    );
  }
}
export default Contact;
