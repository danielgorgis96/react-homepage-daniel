import React from 'react';
import '../Code/Code.css'
import '../Code/Code.scss'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';




class Code extends React.Component{

   enablePython(){
       return(
          <div></div>
       )
    }

render(){



    return (

        <div class="jumbotron text-center">

            <button className="btn btn-primary" onClick={() => this.enablePython()}>Python</button>    
            <button className="btn btn-primary" onClick={() => this.enablePython()}>Python</button>  
            <button className="btn btn-primary" onClick={() => this.enablePython()}>Python</button>  
            <button className="btn btn-primary" onClick={() => this.enablePython()}>Python</button>    
                  
        </div>
  
      )
        
  
       
        
}
}
export { Code as default };