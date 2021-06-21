import React, { Fragment } from "react";
import '../index.css';






const Traducir = ({ traducciones,cargarTraduccion,traducirFrase,cargarElegida}) => {
      const eleccion=traducirFrase;
      
      
      console.log(eleccion);
      const titulo = traducirFrase.length === 0 ? 'Seleccionar Tarjeta a Traducir' : 'tarjeta elegida';
    return ( 
        <Fragment >
          <div >
            {traducirFrase.length === 0 
            ? ('Seleccionar Tarjeta a Traducir' : 'tarjeta elegida';
            
          {titulo}
            <p className="text-sm text-gray-500"> frase numero {traducciones[eleccion].id} {titulo}</p>
            <p>{traducciones[eleccion].traduccion}</p> 
            
          

         
     
         
            </div> 
  
        </Fragment>
     );
}
 
export default Traducir;