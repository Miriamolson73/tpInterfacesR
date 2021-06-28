import React ,{ useState,useEffect, Fragment}from 'react';
import ipsum from "./images/ipsum.png";
import lorem1 from "./images/lorem1.png";
import lorem2 from "./images/lorem2.jpg";
import Traducir from './components/Traducir';
import Frase from './components/Frase';
import Encabezado from './components/Encabezado';
import './index.css';




function App () {

  


  const [traducirFrase,cargarElegida]=useState([]);
  const  elegido = props => {
    cargarElegida(props)
  }
 
  
  
  

   const [frase, setFrase] = useState([]);
   
  
   
   /* const frasesATrabajar = frase.filter (fras =>fras.id < 6)[0] ;
   console.log(frasesATrabajar) */
   
    
   
  
 
  
   
  const url='https://jsonplaceholder.typicode.com/photos';
  

  
  
 
  const consultarAPI = async () => {
    try{
    
  

    const api = await fetch(url);
    console.log(api);
   
    const frase = await api.json();
    const frasesATrabajar = frase.filter (fras =>fras.id < 7) ;
    
 
   setFrase(frasesATrabajar);
   
   
   
    }
    catch (error){
      console.log(error);
    }
   
 
   }
   
    useEffect(() =>{
         consultarAPI();
         
        
       },[]);
       
             

  
    
  
  
  return (
    <Fragment >
      <div > 
        <Encabezado
            ipsum={ipsum}
            lorem2={lorem2}
            lorem1={lorem1}
            />
     
       <ul >
        <li class="flex justify-center mt-2">
          <div className="container 
            text-center font-bold text-xl bg-blue-400 hover:bg-blue-200  border-2 rounded  border-blue-500">
               
            Traducción de frase elegida 
          </div>
        </li>

        <li class="flex justify-center  ">
          <div  className="container
         text-center  bg-blue-400 hover:bg-blue-200  border-2 rounded mx-30 mt-2 border-blue-500 " >
            <Traducir
           
            traducirFrase={traducirFrase}
            cargarElegida={cargarElegida}
            />
          </div> 
        </li>
     
        <li class="flex justify-center  gap-10 mt-5"> 
           <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-2  "> 
           {frase.map(fra => (
              <Frase 
                key = {fra.id}
                title = {fra.title}
                url = {fra.url}
                elegido={elegido}
                id={fra.id}
              />
            ))}
              
            </div>
        </li>   
    </ul> 
    </div>   
    </Fragment>
 
  );
  }  
  export default App;  
  