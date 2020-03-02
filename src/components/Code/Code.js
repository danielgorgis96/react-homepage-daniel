import React from 'react';
import '../Code/Code.css'
import '../Code/Code.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atelierSavannaDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';




class Code extends React.Component {



render() {




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