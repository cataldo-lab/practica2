import React, { useState } from 'react';
import './proyect.css';
import Header from './cat/header.js';  
import Swal from 'sweetalert2';

function Proyect() {
    const [representanteProyecto, setRepresentanteProyecto] = useState("");
    const [rutRepresentante, setRutRepresentante] = useState("");
    const [telefonoRepresentante, setTelefonoRepresentante] = useState("");
    const [correoRepresentante, setCorreoRepresentante] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState("");

    const mostrarDatos = () => {
        Swal.fire({
            title: '¡Datos ingresados!',
            text: 'Datos ingresados exitosamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    };

    return (
        <div className="Proyect">
            <Header />
            <div className="datos">
                <label>
                    Representante Proyecto: 
                    <input
                        onChange={(e) => setRepresentanteProyecto(e.target.value)}
                        type="text"
                    />
                </label>
                <label>
                    Rut-Representante: 
                    <input 
                        onChange={(e) => setRutRepresentante(e.target.value)}
                        type="text"
                    />
                </label>
                <label>
                    Teléfono-Representante: 
                    <input 
                        onChange={(e) => setTelefonoRepresentante(e.target.value)}
                        type="text"
                    />
                </label>
                <label>
                    Correo-Representante: 
                    <input 
                        onChange={(e) => setCorreoRepresentante(e.target.value)}
                        type="text"
                    />
                </label>
                <label>
                    Contraseña: 
                    <input 
                        onChange={(e) => setContraseña(e.target.value)}
                        type="password"
                    />
                </label>
                <label>
                    Confirmar Contraseña: 
                    <input 
                        onChange={(e) => setConfirmarContraseña(e.target.value)}
                        type="password"
                    />
                </label>
                <button onClick={mostrarDatos}>Registrar</button>
            </div>
        </div>
    );
}

export default Proyect;
