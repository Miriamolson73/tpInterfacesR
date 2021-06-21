import React, { Fragment } from "react";
import '../index.css';






const Traducir = ({ traducciones,cargarTraduccion}) => {
    return ( 
        <Fragment >
          <div >
            <p className="text-sm text-gray-500"> frase numero {traducciones[0].id}</p>
            <p>{traducciones[0].traduccion}</p>
            
          

         
     
         
            </div> 
  
        </Fragment>
     );
}
 
export default Traducir;