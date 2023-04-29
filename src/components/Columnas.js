import { format } from "date-fns";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import '../styles/Sucursales.css';

export const Columnas = [
    {
        Header: 'Id',
        accessor: 'id',
        disableFilters: true
    },
    {
        Header: 'Nombre Sucursal',
        accessor: 'nombre_sucursal',
    },
    {
        Header: 'Fecha de apertura',
        accessor: 'fecha_apertura',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') },
    },
    {
        Header: 'Horario Atencion',
        accessor: 'horario_atencion',
    },
    {
        Header: 'Administrador',
        accessor: 'empleado_admin',
    },
    {
        Header: 'Capacidad Maxima',
        accessor: 'capacidad_maxima',
    },
    {
        Header: 'Telefono1',
        accessor: 'telefono1',
    },
    {
        Header: 'Telefono2',
        accessor: 'telefono2',
    },
    {
        Header: 'Acciones',
        Cell: <span className="actions">
            <BsFillPencilFill />
            <BsFillTrashFill className="delete-btn"/>
        </span>,
    }
]