import React, {useState} from 'react';
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
           />
         </div>

          </div>
        </div>
    </div>
  );

}
