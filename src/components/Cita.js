import React from 'react'

export default function Cita ({cita, eliminarCita}){
    return(
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{cita.mascota}</h3>
                <p className="card-text"><span>Nombre Dueño:</span> {cita.propietario}</p>
                <p className="card-text"><span>Fecha:</span> {cita.fecha}</p>
                <p className="card-text"><span>Hora:</span> {cita.hora}</p>
                <p className="card-text"><span>Sintomas:</span> {cita.sintomas}</p>
                <button
                className="btn btn-danger"
                onClick={()=>{eliminarCita(cita.id)}}
                >Borrar
                </button>
            </div>
        </div>

    )
}