import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sumaImpar } from "./actions";
import Button from "react-bootstrap/Button";
function Popup() {
  const [counter,setCounter]= useState({})
  const dispatch = useDispatch();
  const location = useLocation();
  var maravilla = location.search.slice(13, location.search.length - 4);



  function handleClick(e) {
    if (maravilla === "tajMahal") {
      dispatch(sumaImpar(maravilla));
      setCounter(useSelector((state)=>state.tajMahal))
    } else if (maravilla === "petra") {
      dispatch(sumaImpar(maravilla));
      setCounter(useSelector((state)=>state.petra))
    } else if (maravilla === "machuPicchu") {
      dispatch(sumaImpar(maravilla));
      setCounter(useSelector((state)=>state.machuPicchu))
    }
  }


  return (
    <div className="div_main min-vh-100 border">
      <div>
        <h1 className="text-center"> Imagen en Popup!</h1>
        <img
          name={maravilla}
          className="img-fluid"
          src={location.search.slice(1, location.search.length)}
        ></img>
        <div className="text-center">
          <Button
            className='m-2  variant="dark" active'
            id="OkBoton"
            onClick={(e) => handleClick(e)}
          >
            Ok
          </Button>
          <Button
            className='m-2  variant="dark" active'
            onClick={() => window.close()}
          >
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
