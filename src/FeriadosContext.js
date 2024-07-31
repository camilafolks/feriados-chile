// Aquí creo el contexto que consumirán los componentes hijos

import React, { createContext, useState, useEffect } from 'react';

export const FeriadosContext = createContext();

export const FeriadosProvider = ({ children }) => {
    const [feriados, setFeriados] = useState([]);

    useEffect(() => {
        fetch('https://api.boostr.cl/feriados/en.json')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setFeriados(data.data);
                }
            })
            .catch(error => console.error('Error buscando feriados en Chile:', error));
    }, []);

    return (
        <FeriadosContext.Provider value={feriados}>
            {children}
        </FeriadosContext.Provider>
    );
};
