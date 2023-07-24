import React, { useState } from "react";

export default function Example() {
  // Los stateComponents (o client side components) son componentes que tienen estado
  // o, en su defecto, manejan algún tipo de lógica que incluye hooks propios de react.

  const [count, setCount] = useState("example");

  return (
    <div>
      <p>Este es un ejemplo de un componente con estado</p>
      <h2>{count}</h2>
      <button onClick={() => setCount(count++)}>Reset</button>
    </div>
  );
}
