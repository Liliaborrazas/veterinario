import React, {useState} from 'react';
import uuid from 'uuid';


export default function NuevaCita({crearNewCita}){
    const [cita, setCita] = useState({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas:''
        } ,
        
    )
    const [error, setError] = useState({
            error:false
    })
    
    ////////////Cuando el usuario escribe en los input

    const handleChange = ({target}) =>{
        const {name, value} = target;      
        setCita({
            ...cita,
            [name]: value
        })
    }
    ////Cuando el usuario envíe el formulario
    const handleSubmit = (e)=>{
        e.preventDefault();//Esto es para q no se dispare el formulario
        const {mascota, propietario, fecha, hora, sintomas} = cita; 
        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '' ){
            setError({
                ...error,
                error:true
            });
            return;
        }
        const nuevaCita = {
            ...cita
        }
        
        nuevaCita.id = uuid();
        crearNewCita(nuevaCita);

       // const {error} = error

    }
    // const handleClean = (e)=>{
    //    setCita();
    // }

        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    {/* {error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los capos son obligatorios</div> : null } */}
                    <form 
                        onSubmit={handleSubmit}
                    >
                       
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                               Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={handleChange}
                                />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                               Nombre Dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño Mascota"
                                    name="propietario"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>    
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                               Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={handleChange}
                                />
                            </div>
                         <label className="col-sm-4 col-lg-2 col-form-label">
                               Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="hora"
                                    onChange={handleChange}
                                />
                             </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                               Síntomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describe los síntomas"  
                                    onChange={handleChange}                               
                                ></textarea>
                                </div>
                        </div>
                        <input type="submit" 
                               className="py-3 mt-2 btn btn-success btn-block"
                               value="Agregar Nueva Cita"
                            //    onClick={handleClean}
                        />
                    </form>
               </div>
            </div>       
       );
    }

 