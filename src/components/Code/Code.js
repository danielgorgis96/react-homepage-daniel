import React from 'react';
import '../Code/Code.css'
import '../Code/Code.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atelierSavannaDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';









class Code extends React.Component {



render() {


  var mongoose = require('mongoose');
  mongoose.connect("mongodb+srv://homepageuser:Lw7YQjh7q5fV7AH9@cluster0-9ugms.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});
  
  var db = mongoose.connection;
  
  
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open',function(){
  
  });

const codeString = `
    
  if plebiel == "Damen":

    for i in name_list:
        print("name of user:" + i);
  else:

  print("Manden")
  
 
  `;

    let insertFields = (

      <div>

        <h3>Dette er et eksempel</h3>
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>

      </div>)


    return (
      <body>
        <div style={{ overflow: 'auto' }}>

          {insertFields}
          {insertFields}
          {insertFields}
          {insertFields}

        </div>

      </body>

    )




  }
}
export { Code as default };