App.js
import { useState, useEffect } from "react";
import { Switch } from "react-native";
import Bienvenida from "./components/Bienvenida";
import Libreria from "./components/Libreria";

export default function App(){
  const [cargando, setCargando] = useState("pagina0");

  const handlePagina = () => {
    setTimeout(() => setCargando("pagina1"), 2000);
  };

  useEffect(() => {
    handlePagina();
  }, []);

  switch(cargando){
    case 'pagina0':
      return <Bienvenida />;
    case 'pagina1':
      return <Libreria />;
    default:
      return <Bienvenida />;
  }
}