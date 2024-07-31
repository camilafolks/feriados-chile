import React, { useContext } from 'react';
import { FeriadosContext } from '../FeriadosContext';

const ListaFeriados = () => {
    const feriados = useContext(FeriadosContext);

    return (
        <>
            <div className='muestraFeriado'>
                {feriados.length === 0 ? (<p>Cargando feriados...</p>) : (
                    <ul>
                        {feriados.map((feriado, index) => (
                            <li key={index}>
                                <strong>{feriado.date}</strong> - {feriado.title} ({feriado.type})
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default ListaFeriados;
