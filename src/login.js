import React, { useState } from 'react';
import './login.css';
import Header from './cat/header.js';  
import Footer from './cat/Footer.js';
import Swal from 'sweetalert2';


function Login() {
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");

    const mostrarDatos = () => {
        Swal.fire({
            title: '¡Datos ingresados!',
            text: 'Datos ingresados exitosamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    };

    return (
        <div className="Login">
            <Header />
            <div className="datos">
                <label>
                    Correo: 
                    <input
                        onChange={(e) => setCorreo(e.target.value)}
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
                <button onClick={mostrarDatos}>Ingresar</button>
            </div>
            <Footer />
        </div>
    );
}