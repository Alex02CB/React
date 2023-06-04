
// Creamos una petición fetch para extraer los datos de la api
const API_URL = 'https://api.spacexdata.com/v3/launches';

fetch(API_URL)
.then (api => api.json())
.then ((datos) => {
  console.log(datos[0].mission_name);
});

// Creamos una funcion en la cual extraemos los datos de la api
// Le creamos un try y un catch error en el caso de que de error nos muestre error
export async function getAllLaunches(){
    
        const response = await fetch(`${API_URL}/launches`);
        const data = await response.json();
        return data;

}



export async function  getAllLaunchByFlightNumber(flightNumber){
    try{
        const response = await fetch (`${API_URL}/launches/${flightNumber}`)
        const data = await response.json();
        return data;
    } catch (error){
        console.error(error)
    }
}