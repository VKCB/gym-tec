import React, { useMemo, useState } from 'react'
import { useTable, useGlobalFilter, usePagination, useSortBy, } from "react-table";
import MOCK_DATA from "../components/MOCK_DATA.json";
import { Columnas } from "../components/Columnas";
import { GlobalFilter } from '../components/GlobalFilter';
import { Navbar } from "../components/Navbar";
import "../styles/Sucursales.css"
import { Modal } from '../components/Modal';

export const Sucursales = () => {

    const columnas = useMemo(() => Columnas, []);
    const data = useMemo(() => MOCK_DATA, []);

    /* Funciones que brinda reac-table para facilitar codigo de las tablas */
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        state,
        setGlobalFilter,
        prepareRow,
    } = useTable({
        columns: columnas,
        data: data
    },
        useGlobalFilter,
        useSortBy,
        usePagination,
    );

    const { pageIndex } = state;
    const { globalFilter } = state;

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Navbar />
            <div className='div'>
                <body className='body'>
                    <main className='table'>
                        <div>
                            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                        </div>
                        <section className='table_header'>
                            <h1>Gestion de Sucursales</h1>
                        </section>
                        <section className='table_body'>
                            <table {...getTableProps()}>
                                <thead>
                                    {
                                        headerGroups.map((headerGroup) => (
                                            <tr {...headerGroup.getHeaderGroupProps()}>
                                                {
                                                    headerGroup.headers.map((column) => (
                                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                            {column.render('Header')}
                                                            <span>
                                                                {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                                                            </span>
                                                        </th>
                                                    ))}
                                            </tr>
                                        ))}
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {page.map(row => {
                                        prepareRow(row)
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {
                                                    row.cells.map((cell) => {
                                                        return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                                                    })
                                                }
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                            <div>
                                <span>
                                    Page{' '}
                                    <strong>
                                        {pageIndex + 1} of {pageOptions.length}
                                    </strong>{' '}
                                </span>
                                <span>
                                    | Go to page: {' '}
                                    <input type='number' defaultValue={pageIndex + 1}
                                        onChange={e => {
                                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                            gotoPage(pageNumber)
                                        }}
                                        style={{ width: '50px' }} min={1} max={pageCount} />
                                </span>
                                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
                            </div>
                        </section>
                        <button onClick={() => setModalOpen(true)}>Editar</button>
                    </main>
                </body>
                {modalOpen && <Modal closeModal={() => {
                    setModalOpen(false)
                }}/>}
            </div>
            
        </>
    )
}