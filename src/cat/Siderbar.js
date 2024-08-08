import React from 'react';
import { Link } from 'react-router-dom';  
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/ingreso-empresa">Ingreso Empresa</a></li>
          <li><a href="/ver-empresa">Ver Empresas</a></li>
          <li><a href="/ingreso-proyecto">Ingreso Proyecto</a></li>
          <li><a href="/ver-proyecto">Ver Proyectos</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
