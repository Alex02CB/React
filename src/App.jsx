import { useState,useEffect } from 'react'
import Hijo from './Hijo.jsx'
import './App.css'
// Importamos createContext para crear el contexto
import { createContext } from 'react';
// Importamos la api que hemos llamado en js
import * as API from "../services/launches";



// Exportamos el contexto para poder usarlo el los demás componentes
export const Contexto = createContext();

function App() {
  const [launches,setLaunches] = useState([]);
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState('Alex');

  // Con este use effect lo que logramos es almacenar los datos extraidos de la API en la const de launches
  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  const datos = [
    {
      nombre:'Alex',
      apellido:'Campillo',
    },
    {
      numero:620668132,
      correo:'info@info.com'
    }
];

  const datos2 = ['Alex','Campillo'];

  const boton = () => {
    setCount(count+1);
    setNombre('Elena');

  };


  return (
    // En el provider pasamos lo valores que queremos que se muestren en los demás componentes al llamarlos
    <Contexto.Provider value={{
      datos1:datos[0],
      segundosDatos:datos[1],
      datos2:datos2
      }}>
    <h1>Hola soy un contador</h1>
    <h2>Mi nombre es: {nombre}</h2>
    <h2>Número: {count}</h2>
    <button onClick={boton}>Pulsa para añadir números y cambiar el nombre</button>
    <Hijo/>

    {/* Spacexdata */}
    <h1>Spacexdata</h1>
    <section>
      <ul>
      {launches.map(launch => (
        <li key={launch.flight_number}>
          {launch.mission_name}
        </li>
      ))}
      </ul>
    </section>
    </Contexto.Provider>
  )
}

export default App
