import React, { Fragment } from 'react';

const Encabezado = ({ipsum,lorem1,lorem2}) => {
    return ( 
        <Fragment>
        <ul className="flex justify-center flex-grid-row px-5 gap-20 mt-5"> 
    
      <li> 
       
      
      <img src={ipsum} className="w-60 h-32  mx-auto border border-purple-200 hover:border-transparent focus:outline-none"  alt="" width="384" height="600"/>
       
  
       
    
      </li>
      <li> 
      
      <img src={lorem2} className="w-60 h-32  mx-auto border border-purple-200 hover:border-transparent focus:outline-none"  alt="" width="384" height="600"/>
       
  
       
    
      </li>
      <li>
        <img src={lorem1} className="w-60 h-32 rounded-full mx-auto border border-purple-200 hover:border-transparent focus:outline-none "  alt="" width="384" height="600"/>
             
      </li>
    </ul>

      
        
        
       
        </Fragment>
     );
}
 
export default Encabezado;
