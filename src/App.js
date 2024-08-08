import React, { useState } from 'react';
import './App.css';
import Header from './cat/header.js';  
import Footer from './cat/Footer.js';
import Swal from 'sweetalert2';
import Axios from "axios";
import Sidebar from './cat/Siderbar.js';


function App() {

  const [razonSocial, setRazonSocial] = useState("");
  const [rutEmpresa, setRutEmpresa] = useState("");
  const [rolTributario, setRolTributario] = useState("");
  const [nombreFantasia, setNombreFantasia] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [comuna, setComuna] = useState("");
  const [region, setRegion] = useState("");
  const [pais, setPais] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const validarDatos = () => {
    const regexRazonSocial = /^[a-zA-Z\s]+$/;
    const regexRutEmpresa = /^[0-9]{8}-[0-9Kk]{1}$/;
    const regexRolTributario = /^[0-9]{1,8}$/;
    const regexNombreFantasia = /^[a-zA-Z\s]+$/;
    const regexTelefono = /^[0-9]{9}$/;
    const regexDireccion = /^[a-zA-Z0-9\s]+$/;
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regexComuna = /^[a-zA-Z\s]+$/;
    const regexRegion = /^[a-zA-Z\s]+$/;
    const regexPais = /^[a-zA-Z\s]+$/;
    const regexContraseña = /^[a-zA-Z0-9\s]+$/;

    if (!regexRazonSocial.test(razonSocial)) {
      Swal.fire('Error', 'Razón Social no válida', 'error');
      return false;
    }
    if (!regexRutEmpresa.test(rutEmpresa)) {
      Swal.fire('Error', 'RUT Empresa no válido', 'error');
      return false;
    }
    if (!regexRolTributario.test(rolTributario)) {
      Swal.fire('Error', 'Rol Tributario no válido', 'error');
      return false;
    }
    if (!regexNombreFantasia.test(nombreFantasia)) {
      Swal.fire('Error', 'Nombre Fantasía no válido', 'error');
      return false;
    }
    if (!regexTelefono.test(telefono)) {
      Swal.fire('Error', 'Teléfono no válido', 'error');
      return false;
    }
    if (!regexDireccion.test(direccion)) {
      Swal.fire('Error', 'Dirección no válida', 'error');
      return false;
    }
    if (!regexCorreo.test(correo)) {
      Swal.fire('Error', 'Correo no válido', 'error');
      return false;
    }
    if (!regexComuna.test(comuna)) {
      Swal.fire('Error', 'Comuna no válida', 'error');
      return false;
    }
    if (!regexRegion.test(region)) {
      Swal.fire('Error', 'Región no válida', 'error');
      return false;
    }
    if (!regexPais.test(pais)) {
      Swal.fire('Error', 'País no válido', 'error');
      return false;
    }
    if (!regexContraseña.test(contraseña)) {
      Swal.fire('Error', 'Contraseña no válida', 'error');
      return false;
    }
    if (contraseña !== confirmarContraseña) {
      Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
      return false;
    }
    return true;
  };

  const mostrarDatos = () => {
    if (validarDatos()) {
      Swal.fire({
        title: '¡Datos ingresados!',
        text: 'Datos ingresados exitosamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  const add=()=>{
    Axios.post("http://localhost:3306/create",{
      razon_social: razonSocial,
      rut_empresa: rutEmpresa,
      rol_tributario: rolTributario,
      nombre_fantasia: nombreFantasia,
      telefono: telefono,
      direccion: direccion,
      correo: correo,
      comuna: comuna,
      region: region,
      pais: pais,
      contraseña: contraseña,
    }).then((response)=>{
      alert("Empresa registrada");
    })
  }

  return (
    <div className="App">
      <Header />
      <Sidebar />
    
      <div className="datos">
        <label>
          Razón Social: 
          <input 
            onChange={(e) => setRazonSocial(e.target.value)}
            type="text"
          />
        </label>
        <label>
          RUT Empresa: 
          <input
            onChange={(e) => setRutEmpresa(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Rol Tributario: 
          <input 
            onChange={(e) => setRolTributario(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Nombre Fantasía: 
          <input
            onChange={(e) => setNombreFantasia(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Teléfono: 
          <input 
            onChange={(e) => setTelefono(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Dirección: 
          <input 
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Correo: 
          <input 
            onChange={(e) => setCorreo(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Comuna: 
          <input 
            onChange={(e) => setComuna(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Región: 
          <input 
            onChange={(e) => setRegion(e.target.value)}
            type="text"
          />
        </label>
        <label>
          País: 
          <input 
            onChange={(e) => setPais(e.target.value)}
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
      <Footer />
    </div>
  );
}

export default App;
