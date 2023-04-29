import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, Fabars, FaTimes } from "react-icons/fa";
import Logo from '../assets/Gym-icon.png';
import "../styles/Navbar.css"

export const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Logo"/> 
            </div>
            <nav ref={navRef}>
                {/* Aqui van todos los links del navbar*/}
                <Link to='/Sucursales'>Sucursales</Link>
                <Link to='/Spa'>Spa</Link>
                <Link to='/Puestos'>Puestos</Link>
                <Link to='/Planilla'>Planilla</Link>
                <Link to='/Empleados'>Empleados</Link>
                <Link to='/Tipos_Equipo'>Tipos de equipo</Link>
                <Link to='/Inventario'>Inventario</Link>
                <Link to='/Productos'>Productos</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

/*export default Navbar;*/