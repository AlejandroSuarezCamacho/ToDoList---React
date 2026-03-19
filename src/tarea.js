export function Tarea() {
  return (
    <div>
      <li>v</li>
      <p>Llorar con la llorona</p>
      <span>x</span>
    </div>
  )
}

export function Input(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Cortar cebolla"
        onChange={props.agregarCaracter}
      />
    </div>
  )
}

export function Boton(props) {
  return (
    <button onClick={props.alSumar}>
      Click
    </button>
  );
}