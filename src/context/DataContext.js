import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvaider = ({ children }) => {
    const [listUsers, setListUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [pageTotal, setPageTotal] = useState(1);
    const value = {
        listUsers,
        setListUsers,
        page,
        setPage,
        pageTotal,
        setPageTotal
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvaider