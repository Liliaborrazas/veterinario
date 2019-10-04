import React, {useState} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';


export default function App() {
  const [citas, setCitas] = useState([])
  const crearNewCita = (datos)=>{
    console.log(datos)
      const nuevasCitas = [datos,...citas];
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

          </div>
        </div>
    </div>
  );

}
