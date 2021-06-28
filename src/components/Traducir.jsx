import React, { Fragment, useState } from "react";
import '../index.css';






const Traducir = ({ traducirFrase,cargarElegida}) => {
      const eleccion=traducirFrase;
      const [traducciones,cargarTraduccion]= useState([
        {id:0, traduccion:" طويل وهي أن المحتوى المقرنوء لصفحة ما سيلهي القارئ عن"},
        {id:1, traduccion:" سى الشكل الخاتوضع الفقرات في الصفحة ال "},
        {id:2, traduccion:" ى المقرنوء لصفحة ما سيلهي ابسوم لأنها تعطي توزيعاَ طبيعياَ "},
        {id:3, traduccion:" طويل وهي أن المحتوى المقرنوء لصفحة ما سيلهي القارئ عن"},
        {id:4, traduccion:" سى الشكل الخاتوضع الفقرات في الصفحة ال "},
        {id:5, traduccion:" ى المقرنوء لصفحة ما سيلهي ابسوم لأنها تعطي توزيعاَ طبيعياَ "},
        {id:6, traduccion:" طويل وهي أن المحتوى المقرنوء لصفحة ما سيلهي القارئ عن"},
        {id:7, traduccion:" سى الشكل الخاتوضع الفقرات في الصفحة ال "},
        {id:8, traduccion:" ى المقرنوء لصفحة ما سيلهي ابسوم لأنها تعطي توزيعاَ طبيعياَ "},
        {id:9, traduccion:" سى الشكل الخاتوضع الفقرات في الصفحة ال "},
        
        
      ]);
      
      
      console.log(eleccion);
      
    return ( 
        <Fragment >
          <div >
            {traducirFrase.length === 0 
            ? (<p className="text-sm text-gray-900">Seleccionar frase a Traducir</p>)
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