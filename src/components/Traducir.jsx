import React, { Fragment } from "react";
import '../index.css';






const Traducir = ({ traducciones,cargarTraduccion,traducirFrase,cargarElegida}) => {
      const eleccion=traducirFrase;
      
      
      console.log(eleccion);
      
    return ( 
        <Fragment >
          <div >
            {traducirFrase.length === 0 
            ? (<p>Seleccionar Tarjeta a Traducir</p>)
             :
             (
            
             <div>
            <p className="text-sm text-gray-500"> frase numero {traducciones[eleccion].id} </p>
            <p>{traducciones[eleccion].traduccion}</p> 
            </div>
             )
          

         
          }        
         
            </div> 
  
        </Fragment>
     );
}
 
export default Traducir;