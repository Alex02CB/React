import { useContext } from "react"
import { Contexto } from "./App";



const Hijo = () => {

    // Importante crear la const dento de Hijo, llamaremos al useContext y el nombre que le hayamos puesto al exportalo
    const datosMostrar  = useContext(Contexto);

  return (
    <>
        <div style={{background:"red", border:"1px solid black"}}>
          {/* En este caso como hemos pasado por el provider el value de datos, solo me mostrá el apellido y como es un array y no un objeto no hace falta llamar a ningun objeto  */}
          {/* Llamaremos a la const de arriba ya que tiene almacenada el value del provider */}
          <h2>Este es mi nombre: {datosMostrar.datos1.nombre}</h2>
          <h2>Este es mi apellido: {datosMostrar.datos2[1]}</h2>
          <h2>Mi correo electronico: {datosMostrar.segundosDatos.correo}</h2>
          <h2>Mi número de contacto: {datosMostrar.segundosDatos.numero}</h2>
        </div>

    </>

  )
}

export default Hijo