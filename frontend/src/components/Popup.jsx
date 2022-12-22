import React,{useState,useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import Button from "react-bootstrap/Button";
function Popup({abrirModal,botonContador}) {
    const contador=window.document.getElementById("img1");
    const contador3=window.document.getElementById("img3");
    const contador5=window.document.getElementById("img5");
    console.log(contador3)
    // console.log("ReferenciaVentana",referenciaVentana)
    const location= useLocation()
   
    function testButton() {
        
        console.log("Estoy haciendo click!",window.opener.document)
    }
 
    return  (
        <div className='div_main min-vh-100 border'>
         <div>
          <h1 className='text-center'> Imagen en Popup!</h1>
          <img className='img-fluid' src={location.search.slice(1,location.search.length)} ></img>
          <div className='text-center'>

          <Button className='m-2  variant="dark" active' id="OkBoton" onClick={testButton} >Ok</Button>
          <Button className='m-2  variant="dark" active' onClick={()=>window.close()} >Cerrar</Button>
          </div>
         </div>   
        </div>
    ) ;

   
}

export default Popup;