import React, {useState, useEffect} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';


export default function App() {
  const [citas, setCitas] = useState([])
  const crearNewCita = (datos)=>{
      const nuevasCitas = [...citas , datos];
      setCitas(nuevasCitas)
  }

  const eliminarCita = id=>{
    //Tomar una copia del estado actual
    const estadoActual = [...citas];
    //utilizar filter para sacar el elemento id del array
    const borrar = estadoActual.filter(cita=> cita.id !== id );
    //actualizar el state
    setCitas(borrar)

    
  }
  ////CUando la aplicacion se carga, se fija si hay datos en el local storage, si los hay los recoje, los convierte en json y los muestra en la ventana!!!!
  useEffect(()=>{
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      setCitas(JSON.parse(citasLS))
    }
  },[])

  ///Cuando la aplicación carga...
  //Para guardar en el localstorage, ponemos como primer parametro el array del estado(con comillas de string, ya que el local no soporta otra cosa 
  //que no sea string) y le pasamos el array convirtiendolo en string.Lo vemos en aplication si funciona!
  useEffect(()=>{
    localStorage.setItem('citas', JSON.stringify(citas));
  });



  ///Cuando eliminamos o agregamos una nueva cita...


  return(
    <div className="container">
      <Header
        titulo='Administrador Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
         <NuevaCita
        crearNewCita={crearNewCita}
         /> 
         <div className="mt-5 col-md-10 mx-auto">
           <ListaCitas
           citas = {citas}
           eliminarCita={eliminarCita}
           />
         </div>

          </div>
        </div>
    </div>
  );

}
