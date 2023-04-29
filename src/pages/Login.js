import React, { useState } from "react"
import "../styles/Login.css";

function validation() {
    var user, password;

    user = document.getElementById('Usuario').value;
    password = document.getElementById('password').value;

    if (user === "Administrador" && password === "12345") {
        window.location = "Sucursales"
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function change_register() {
    window.location = "Register"
}

export const Login = (props) => {
    const [Usuario, setUsuario] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Usuario);
    }

    return (
        <div className="page">
            <form onSubmit={handleSubmit} className="cover">
                <label htmlFor="Usuario" className="login_label">Usuario</label>
                <input value={Usuario} onChange={(e) => setUsuario(e.target.value)}
                    type="text"
                    placeholder="Inserte su usuario"
                    id="Usuario"
                    name="Usuario"
                    className="login_input"></input>

                <label htmlFor="Password" className="login_label">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="Inserte su Password"
                    id="password"
                    name="password"
                    className="login_input"></input>

                <button type="submit" className="login_btn" onClick={validation}>Log In</button>

                {/* () => props.onFormSwitch('register') */}
                <button onClick={change_register} 
                    className="registrar_btn">No tienes cuenta? Registrate aqui.
                </button>
            </form>

        </div>
    )
}