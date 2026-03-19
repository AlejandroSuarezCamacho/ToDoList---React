import logo from './logo.png';
import './App.css';
import { Input, Tarea, Boton } from "./tarea"
import React, { useEffect, useState } from 'react';

/* function App() {

  const [cadena, setCadena] = useState("");
  const [contador, setContador] = useState(0);

  useEffect(()=>{
    console.log("El contador cambió", contador);
  }, [contador]);

  const incrementar = () => {
    setContador(contador + 1);
    console.log(contador)
  }

  const agregarCaracter = (e) => {
    setCadena(e.target.value);
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div><Titulo contadores={contador} /></div>
        <Titulo2 contadores={cadena} />
        <Boton alSumar={incrementar} />
        <Input agregarCaracter={agregarCaracter} />
        <Tarea />
        <Tarea />
        <Tarea />
      </header>
    </div>
  );
}

function Titulo(props) {
  return (
    <div>
      <h1>Haz completado {props.contadores} de 5</h1>
    </div>
  )
}

function Titulo2(props) {
  return (
    <div>
      <h1>{props.contadores}</h1>
    </div>
  )
} */

import TodoList from "./TodoList.js";

export default function App() {
  return <TodoList />
}
