import React from 'react'
import '../styles/Modal.css';

export const Modal = ({ closeModal }) => {
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
                        <input type='text' name='id' disabled />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='nombre_sucursal'>Nombre Sucursal</label>
                        <input type='text' name='nombre_sucursal' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='fecha_apertura'>Fecha de apertura</label>
                        <input type='date' name='fecha_apertura' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='horario_atencion'>Horario Atencion</label>
                        <input type='text' name='horario_atencion' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='empleado_admin'>Administrador</label>
                        <input type='text' name='empleado_admin' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='capacidad_maxima'>Capacidad Maxima</label>
                        <input type='text' name='capacidad_maxima' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='telefono1'>Telefono1</label>
                        <input type='text' name='telefono1' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='telefono2'>Telefono2</label>
                        <input type='text' name='telefono2' />
                    </div>

                    <button type='submit' className='submit-btn'>Enviar</button>
                </form>
            </div>
        </div>
    )
}
