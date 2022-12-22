import React,{useRef} from "react";

function Modal({ imagenes,setOpen }) {
  return (
    <div
      className="div_modal"
    >
      
      <p onClick={()=>setOpen(false)}> X</p>
      <img className="img-fluid mx-auto d-block img-thumbnail " width="600" height="600" src={imagenes}></img>
    </div>
  );
}

export default Modal;
