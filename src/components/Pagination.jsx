import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import Button from 'react-bootstrap/Button';

const Pagination = () => {
    const { page, setPage, pageTotal } = useContext(DataContext);
    const next = ()=>{
        setPage(page+1);
    }
    const back = ()=>{
        setPage(page-1);
    }
    return (
        <>
            {page > 1 && <Button variant="primary" onClick={back}>Anterior</Button>}
            {page < pageTotal && <Button variant="primary" onClick={next}>Siguiente</Button>}
        </>
    )
}

export default Pagination