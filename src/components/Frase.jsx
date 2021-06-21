import React, { Fragment,useEffect } from "react";
import '../index.css';


const Frase = ({fraseCero,fraseUno,fraseDos,fraseTres,fraseCuatro,fraseCinco,fraseSeis,fraseSiete }) => {
  
   // console.log(frase);
   
  

    

 

    return ( 
  <Fragment >
  

    
    <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-5">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseCero.url} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {fraseCero.title}
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Traducir</button>
        </div>
    </div>
    {/* // ---------------------------------------------- */}
    <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-5">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseUno.url} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {fraseUno.title}
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Traducir</button>
        </div>
    </div>
    {/* //-------------------------------------------------- */}
    <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-5">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseDos.url} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {fraseDos.title}
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Traducir</button>
        </div>
    </div>
    {/* //-------------------------------------------------- */}
    <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-5">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseTres.url} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {fraseTres.title}
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Traducir</button>
        </div>
    </div>
    {/* //-------------------------------------------- */}
    <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-5">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseCuatro.url} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {fraseCuatro.title}
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Traducir</button>
        </div>
    </div>
    {/* //------------------------------------------------ */}
    <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-5">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseCinco.url} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {fraseCinco.title}
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Traducir</button>
        </div>
    </div>
    {/* //------------------------------------------------------------ */}
    {/* <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-5">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseSeis.url} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {fraseSeis.title}
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Traducir</button>
        </div>
    </div>
    {/* //------------------------------------------------------------- */}
    {/* <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-5">
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={fraseSiete.url} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {fraseSiete.title}
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Traducir</button>
        </div>
    </div> */} */}

    
   
   
    </Fragment>
  
     
         
            
  
     
     );
}
 
export default Frase;