import { useState, useEffect, useRef } from "react";

import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import { sumaImpar } from "./components/actions";

import tajMahal from "./images/tajMahal.jpg";
import cristoRedentor from "./images/estatua-cristo-redentor-og.jpg";
import petra from "./images/petra.jpg";
import coliseo from "./images/coliseo-romano_16022ed4_1280x853.jpg";
import machuPicchu from "./images/machuPicchu.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPersonSquare } from "react-icons/bs";

import Modal from "./components/Modal";
import Popup from "./components/Popup";

function App() {
  const [contador, setContador] = useState({
    tajMahal: 0,
    petra: 0,
    machuPicchu: 0,
  });
  const [secondcount, setSecondCount] = useState(0);
  const [activeFoto, setActiveFoto] = useState("");
  const [fourcount, setFourCount] = useState(0);

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [imagenes, setImagenes] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    console.log("soy active foto: ", activeFoto);
    const handleExceptionData = () => {
      setContador((preValue) => {
        return {
          ...preValue,
          [activeFoto]: JSON.parse(localStorage.getItem(activeFoto)),
        };
      });
    };
    window.addEventListener("storage", handleExceptionData);

    return function cleanup() {
      window.removeEventListener("storage", handleExceptionData);
    };
  }, [activeFoto]);

  function init() {
    dispatch(sumaImpar("init"));
  }

  function abrirPopup(imagenNombre) {
    var maravilla = imagenNombre.slice(12, imagenNombre.length - 4);
    var dataPopup = "width=800,height=400";
    window.open(`/popup?${imagenNombre}`, "popup=yes", dataPopup);
  }
  function abrirModal(id, imagen, cadena) {
    setActiveFoto(cadena);
    if ((imagen && id == 2) || id === 4) {
      setOpen(true);
      setImagenes(imagen);
      id == 2 ? setSecondCount(secondcount + 1) : setFourCount(fourcount + 1);
    } else if ((imagen && id === 1) || id === 3 || id === 5) {
      abrirPopup(imagen);
    }
  }

  function handleClick() {
    fetch("home.json")
      .then((response) => response.json())
      .then((data) => {
        setText(data.texto);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="bg-primary min-vh-100 border  ">
      <div className={open === false ? "display" : ""}>
        <Modal imagenes={imagenes} setOpen={setOpen} />
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
                onClick={() => abrirModal(1, tajMahal, "tajMahal")}
                name="tajMahal"
                id="1"
                src={tajMahal}
                className=" img-fluid img-thumbnail rounded mx-auto d-block m-2 w-200px h-200px"
                height="200"
                width="200"
              ></img>

              <div className="text-center">
                <BsPersonSquare />{" "}
                <span id="img1" on>
                  {contador.tajMahal}
                </span>
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
                onClick={() => abrirModal(2, cristoRedentor)}
                id="2"
                src={cristoRedentor}
                className=" img-fluid img-thumbnail rounded mx-auto d-block m-2 w-200px h-200px"
                height="200"
                width="200"
              ></img>
              <div className="text-center">
                <span id="img2">
                  <BsPersonSquare />
                </span>{" "}
                {secondcount}{" "}
              </div>
              <p className="text-center">
                El Cristo Redentor <br /> es una estatua art d??co <br /> que
                representa a Jes??s de Nazaret{" "}
              </p>
            </div>
            <div className=" col-sm-auto   ">
              <a href="#!" data-bs-toggle="modal" data-bs-target="#petra"></a>
              <img
                onClick={() => abrirModal(3, petra, "petra")}
                name="petra"
                id="3"
                src={petra}
                className=" img-fluid img-thumbnail rounded mx-auto d-block m-2 w-200px h-200px"
                height="200"
                width="200"
              ></img>
              <div className="text-center">
                <BsPersonSquare /> <span id="img3"> {contador.petra} </span>
              </div>
              <p className="text-center">
                Petra es un importante enclave <br /> arqueol??gico en <br />{" "}
                Jordania y la capital <br />
                del antiguo reino nabateo
              </p>
            </div>
            <div className=" col-sm-auto  ">
              <img
                onClick={() => abrirModal(4, coliseo)}
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
                <br /> es un anfiteatro de la <br /> ??poca del Imperio romano,
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
                onClick={() => abrirModal(5, machuPicchu, "machuPicchu")}
                id="5"
                name="machuPicchu"
                src={machuPicchu}
                className=" img-fluid img-thumbnail rounded mx-auto d-flex  m-2 w-200px h-200px"
                height="200"
                width="200"
              ></img>
              <div className="text-center">
                {" "}
                <BsPersonSquare /> <span id="img5"></span>
                {contador.machuPicchu}
              </div>
              <p className="text-center">
                Machu Picchu <br />
                es una ciudadela <br /> inca ubicada <br /> en las alturas{" "}
                <br /> de las monta??as de <br /> los Andes en Per??
              </p>
            </div>
            <div className="text-center">
              <textarea
                id="textArea"
                value={text.length ? text : ""}
                readOnly
              ></textarea>
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
