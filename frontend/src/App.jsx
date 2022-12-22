import { useState, useEffect,useRef } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import imagenPrueba from "./images/placeholder-image.png";
import tajMahal from "./images/taj-mahal.jpg";
import cristoRedentor from "./images/estatua-cristo-redentor-og.jpg";
import petra from "./images/petra-world-heritage-jordan.jpg";
import coliseo from "./images/coliseo-romano_16022ed4_1280x853.jpg";
import machuPicchu from "./images/Machu_Picchu,_Peru_(2018).jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPersonSquare } from "react-icons/bs";

import Modal from "./components/Modal";
import Popup from "./components/Popup";
function App() {
  const botonContador=useRef(null)
  const [firstcount, setFirstCount] = useState(0);
  const [secondcount, setSecondCount] = useState(0);
  const [thirdcount, setThirdCount] = useState(0);
  const [fourcount, setFourCount] = useState(0);
  const [fivecount, setFiveCount] = useState(0);
  const primerContador=useRef(null)
  const tercerContador=useRef(null)
  const quintoContador=useRef(null)
  const [text, setText]= useState("");
  const [open, setOpen]= useState(false);
  const [imagenes, setImagenes]= useState("");
  primerContador.current=firstcount
  tercerContador.current=thirdcount
  quintoContador.current=fivecount
  
  console.log(botonOk)
  
  var botonOk= document.getElementById("OkBoton")

  // botonOk.addEventListener("click",()=>{
  //   console.log("Estoy escuchando el boton ok!")
  //    })

  

  function abrirPopup(imagenNombre) {
    var dataPopup= "width=800,height=400"
     window.open(`/popup?${imagenNombre}`,"popup=yes",dataPopup)
     
     

  }
  function abrirModal(id,imagen) {
    if (imagen && id==2 || id===4  ) {
       setOpen(true)
       setImagenes(imagen)
       id==2 ? setSecondCount(secondcount + 1) : setFourCount(fourcount + 1)

    }
    else if (imagen && id===1 || id===3 || id===5) {
      
      (id===1 ? setFirstCount(firstcount + 1) : setThirdCount(thirdcount + 1))  
         
     
        abrirPopup(imagen)
      //  botonOk.addEventListener("click",()=>{
      //   setFirstCount(firstcount + 1)
      //  })
      
    }
    
  }

  function handleClick() {
    fetch("home.json")
    .then(response => response.json())
    .then(data => { 
     setText(data.texto)
     
      
    })
    .catch(err => console.log(err))

  
  }
  return (
    <div className="bg-primary min-vh-100 border  ">
    <div className={open === false ? "display" : ""}>
     <Modal imagenes={imagenes} setOpen={setOpen}/>
     </div>
     <div className="display">
     <Popup />
     </div>
     
      <h1 className="text-center mt-5 display-3 ">Maravillas del mundo </h1>
      <div className="  p-5  max-w-100      ">
        <div>
          <div className="  row justify-content-center   ">
            {" "}
            {}
            <div
              
              className=" col-sm-auto w  "
              lg="2"
              sm="auto"
              md="auto"
              xxl="auto "
              xs="auto"
            >
              <img
               onClick={()=>abrirModal(1,tajMahal) }
                id="1"
                src={tajMahal}
                className=" img-fluid img-thumbnail rounded mx-auto d-block m-2 w-200px h-200px"
                height="200"
                width="200"
              ></img>
              <div className="text-center">
              <BsPersonSquare  /> <span id="img1"> {firstcount}</span> 
              </div>
              <p className="text-center text-wrap ">
                El Taj Mahal fue construido <br /> entre 1632 y 1654 en la
                ciudad de Agra <br /> estado de Uttar Pradesh (India)
              </p>
            </div>
            <div className=" col-sm-auto   ">
              <a
                href="#!"
                data-bs-toggle="modal"
                data-bs-target="#cristoRedentor"
              ></a>
              <img
                onClick={() => abrirModal(2,cristoRedentor)}
                id="2"
                src={cristoRedentor}
                className=" img-fluid img-thumbnail rounded mx-auto d-block m-2 w-200px h-200px"
                height="200"
                width="200"
              ></img>
              <div className="text-center">
                <span id="img2"><BsPersonSquare /></span> {secondcount}{" "}
              </div>
              <p className="text-center">
                El Cristo Redentor <br /> es una estatua art déco <br /> que
                representa a Jesús de Nazaret{" "}
              </p>
            </div>
            <div className=" col-sm-auto   ">
              <a href="#!" data-bs-toggle="modal" data-bs-target="#petra"></a>
              <img
                onClick={()=>abrirModal(3,petra)}
                id="3"
                src={petra}
                className=" img-fluid img-thumbnail rounded mx-auto d-block m-2 w-200px h-200px"
                height="200"
                width="200"
              ></img>
              <div className="text-center">
              <BsPersonSquare /> <span id="img3"> {thirdcount}{" "}</span>
              </div>
              <p className="text-center">
                Petra es un importante enclave <br /> arqueológico en <br />{" "}
                Jordania y la capital <br />
                del antiguo reino nabateo
              </p>
            </div>
            <div className=" col-sm-auto  ">
              
              <img
                onClick={() => abrirModal(4,coliseo)}
                id="4"
                src={coliseo}
                className=" img-fluid img-thumbnail rounded mx-auto d-block m-2 w-200px h-200px"
                height="200"
                width="200"
              ></img>
              <div className="text-center">
                <BsPersonSquare /> {fourcount}{" "}
              </div>
              <p className="text-center">
                El Coliseo
                <br /> es un anfiteatro de la <br /> época del Imperio romano,
                <br /> construido en el siglo I{" "}
              </p>
            </div>
            <div className=" col-sm-auto  ">
              <a
                href="#!"
                data-bs-toggle="modal"
                data-bs-target="#machuPicchu"
              ></a>
              <img
                onClick={()=>abrirModal(5,machuPicchu)}
                id="5"
                src={machuPicchu}
                className=" img-fluid img-thumbnail rounded mx-auto d-flex  m-2 w-200px h-200px"
                height="200"
                width="200"
              ></img>
              <div className="text-center">
                {" "}
                <BsPersonSquare /> <span id="img5"></span> {fivecount}{" "}
              </div>
              <p className="text-center">
                Machu Picchu <br />
                es una ciudadela <br /> inca ubicada <br /> en las alturas{" "}
                <br /> de las montañas de <br /> los Andes en Perú
              </p>
            </div>
            <div className="text-center">
              <textarea id="textArea" value={text.length ? text : ""}></textarea>
            </div>
            <div className="text-center">
              <Button onClick={handleClick} variant="dark" active>
                Cargar Texto
              </Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
