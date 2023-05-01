import React, { useState, useEffect } from 'react'
import '../styles/Modal.css';

export const Modal = ({ closeModal }) => {

    /* Hace falta un autogenerador de id o
    que si se hace un POST, el API debe de asignarlo*/
    const initialForm = {
        id: null,
        nombre_sucursal: "",
        fecha_apertura: "",
        horario_atencion: "",
        empleado_admin: "",
        capacidad_maxima: "",
        telefono1: "",
        telefono2: "",
    };

    const [formState, setFormState] = useState(initialForm);

    /* Esta funcion detecta todos los cambios que se le hagan a los inputs
    y actualiza el formState el cual almacena estos datos para finalmente hacer
    un PUT */
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    /* Esta funcion se encarga de enviar todos los una vez que se haya precionado
    el boton de submit */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    /* El componente Modal regresa una pequeña ventana con inputs
    donde el adminstrador podra agregar un registro nuevo, el modal
    es util ya que se sobrepone a la pagina original y se ve mejor esteticamente */
    return (
        <div className='modal-container' onClick={(e) => {
            if (e.target.className === 'modal-container') {
                closeModal();
            }
        }}>
            <div className='modal-cuadro'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='id'>Id</label>
                        <input
                            type='text'
                            name='id'
                            disabled
                            value={formState.id}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='nombre_sucursal'>Nombre Sucursal</label>
                        <input
                            type='text'
                            name='nombre_sucursal'
                            value={formState.nombre_sucursal}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='fecha_apertura'>Fecha de apertura</label>
                        <input
                            type='date'
                            name='fecha_apertura'
                            value={formState.fecha_apertura}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='horario_atencion'>Horario Atencion</label>
                        <input
                            type='text'
                            name='horario_atencion'
                            value={formState.horario_atencion}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='empleado_admin'>Administrador</label>
                        <input
                            type='text'
                            name='empleado_admin'
                            value={formState.empleado_admin}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='capacidad_maxima'>Capacidad Maxima</label>
                        <input
                            type='text'
                            name='capacidad_maxima'
                            value={formState.capacidad_maxima}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='telefono1'>Telefono1</label>
                        <input
                            type='text'
                            name='telefono1'
                            value={formState.telefono1}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='telefono2'>Telefono2</label>
                        <input
                            type='text'
                            name='telefono2'
                            value={formState.telefono2}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type='submit'
                        className='submit-btn'
                        onClick={handleSubmit}>Enviar</button>
                </form>
            </div>
        </div>
    )
}
