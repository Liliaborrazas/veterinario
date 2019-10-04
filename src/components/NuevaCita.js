import React, {useState} from 'react';

export default function NuevaCita(){
    const [cita, setCita] = useState(
       {
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas:''
        }     
    )
//    const handleChange3 = (e)=>{
//        console.log(e.target.name)
//        // setCita({mascota: e.target.value});
//        setCita({
//            ...cita,
//            mascota: e.target.value,
          
//        });
//     }
//     const handleChange2 = (e)=>{
//         console.log(e.target.name)

//         // setCita({mascota: e.target.value});
//         setCita({
//             ...cita,
//             propietario: e.target.value
//         });
//      }
//      const sintomas = (e)=> {
//         console.log(e.target.name)

//         setCita({
//             ...cita,
//             sintomas: e.target.value
//         })
//     }

    // const handleChange = (e)=> {
    //     setCita({
    //         ...cita,
    //         [e.target.name]: e.target.value
    //     })
    // }
    const handleChange = ({target}) =>{
        const {name, value} = target;      
        setCita({
            ...cita,
            [name]: value
        })
    }

        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    <form>
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
                                    name="fecha"
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
                        />
                    </form>
               </div>
            </div>       
       );
    }

 