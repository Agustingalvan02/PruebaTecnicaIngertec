import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sumaImpar } from "./actions";
import Button from "react-bootstrap/Button";
function Popup(e) {
  const dispatch = useDispatch();
  var contador = useSelector((state) => state);
  const location = useLocation();
  var maravilla = location.search.slice(13, location.search.length - 4);

  // console.log("Soy el contador: ", contador);
  // useEffect(() => {
  //   dispatch(contador);
  // }, []);

 
  function handleClick(e) {
    if (maravilla === "tajMahal") {
      dispatch(sumaImpar(maravilla));
    } else if (maravilla === "petra") {
      dispatch(sumaImpar(maravilla));
    } else if (maravilla === "machuPicchu") {
      dispatch(sumaImpar(maravilla));
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
