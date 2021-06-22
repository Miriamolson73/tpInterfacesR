import React ,{ useState,useEffect, Fragment}from 'react';
import ipsum from "./images/ipsum.png";
import lorem1 from "./images/lorem1.png";
import lorem2 from "./images/lorem2.jpg";
import Traducir from './components/Traducir';
import Frase from './components/Frase';
import Encabezado from './components/Encabezado';
import './index.css';



function App () {
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
  

  const [traducirFrase,cargarElegida]=useState([]);
  const  elegido = props => {
    cargarElegida(props)
  }
 
  
  
  // const nuevasFrases = frase.filter(elegidas => frase.id ===1);
  // cargarElegida (nuevasFrases);


  //const [frase, setFrase] = useState({});
  const [fraseCero,setFrase0]= useState({});
    const [fraseUno,setFrase1]= useState({});
    const [fraseDos,setFrase2]=useState({});
    const [fraseTres,setFrase3]= useState({});
    const [fraseCuatro,setFrase4]=useState({});
    const [fraseCinco,setFrase5]=useState({});
  
   
  const url='https://jsonplaceholder.typicode.com/photos';
  


 
 
  const consultarAPI = async () => {
    try{
    
  

    const api = await fetch(url);
   
    const frase = await api.json();
   
    
    setFrase0(frase[0]);
   setFrase1(frase[1]);
   setFrase2(frase[2]);
   setFrase3(frase[3]);
   setFrase4(frase[4]);
   setFrase5(frase[5]);
   

   
   
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
            traducciones={traducciones}
            cargarTraduccion={cargarTraduccion}
            traducirFrase={traducirFrase}
            cargarElegida={cargarElegida}
            />
          </div> 
        </li>
     
        <li class="flex justify-center  gap-10 mt-5"> 
           <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-2  "> 
              <Frase
                fraseCero={fraseCero}
                fraseUno={fraseUno}
                fraseDos={fraseDos}
                fraseTres={fraseTres}
                fraseCuatro={fraseCuatro}
                fraseCinco={fraseCinco}
                elegido={elegido}/> 
            </div>
        </li>   
    </ul> 
    </div>   
    </Fragment>
 
  );
  }  
  export default App;  
  