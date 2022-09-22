import React, { useState, useEffect } from 'react';
import './App.css';
//import Saludo from './components/Saludo';
import Counter from './components/Counter';
import Button from './components/Button';
import Sidebar from './components/Sidebar';
function App() {
  //let edad = 17;
  //const [edad,setEdad]=useState(34);
  const [count, setCount] = useState({
    num: 10,
    nombre: 'jose'
  });
  const [parametro, setParametro] = useState(true)
  useEffect(() => {
    /*if (count.num > 11) {
      setParametro(true);
    } else {
      setParametro(false)
    }*/
    setParametro(count.num > 11);
  }, [count.num]);

  const sumar = () => {
    setCount({ ...count, num: count.num + 1 });
  }
  const restar = () => {
    setCount({ ...count, num: count.num - 1 });
  }
  return (
    <>
      {parametro && <Sidebar nombre={count.nombre} />}
      <Counter numero={count.num} />
      <Button tipo='suma' accion={sumar} />
      <Button tipo='resta' accion={restar} />
    </>
  );
}

export default App;
