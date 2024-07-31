import React, { useContext, useState, useEffect } from 'react';
import { format } from 'date-fns';
import { FeriadosContext } from '../FeriadosContext';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';

const GeneradorFeriados = () => {
    const feriados = useContext(FeriadosContext); //consumo el context

    const [randomFeriado, setRandomFeriado] = useState(null); //declaro el estado del Feriado aleatorio, como no comienza con ninguno específico pongo null como valor

    useEffect(() => {
        const generarFeriadoAleatorio = () => {             // para generar un índice aleatorio y seleccionar un feriado de la lista
            const randomIndex = Math.floor(Math.random() * feriados.length);
            setRandomFeriado(feriados[randomIndex]);
        };

        if (feriados.length > 0) {           // Solo generamos un feriado aleatorio si la lista de feriados no está vacía.
            generarFeriadoAleatorio();
        }
    }, [feriados]);         //El efecto se ejecuta CADA VEZ QUE 'feriados' cambia (dado por el boton de aleatoriedad)

    const generarFeriadoAleatorio = () => {
        const randomIndex = Math.floor(Math.random() * feriados.length);
        setRandomFeriado(feriados[randomIndex]);
    };

    const formatearFecha = (fecha) => {
        return format(new Date(fecha), 'dd/MM/yyyy');
    };

    return (
        <>
            <div>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Feriado Aleatorio</MDBCardTitle>
                        {randomFeriado ? (
                            <>
                                <MDBCardText>
                                    <strong>{formatearFecha(randomFeriado.date)}</strong> - {randomFeriado.title} ({randomFeriado.type})
                                </MDBCardText>
                                <MDBCardText>
                                    Tipo: {randomFeriado.type}
                                </MDBCardText>
                                <MDBCardText>
                                    Inalienable: {randomFeriado.inalienable ? 'Sí' : 'No'}
                                </MDBCardText>
                                <MDBCardText>
                                    Extra: {randomFeriado.extra}
                                </MDBCardText>
                            </>
                        ) : (
                            <MDBCardText>No hay feriado seleccionado.</MDBCardText>
                        )}
                        <MDBBtn onClick={generarFeriadoAleatorio}>Generar Feriado Aleatorio</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </>
    );
};

export default GeneradorFeriados;

// En este componente:
// useState maneja el ESTADO de 'randomFeriado', que almacena el feriado aleatorio seleccionado, además permite actualizar el estado mediante 'setRandomFeriado'.
// useEffect ejecuta la lógica para generar un feriado aleatorio cuando los feriados son cargados inicialmente (o cuando cambian).
//   Defino la función 'generarFeriadoAleatorio' dentro del useEffect para seleccionar y establecer un feriado aleatorio, garantizando que la función esté accesible y actualizada en cada ejecución del efecto.
//   Utiliza feriados como dependencia, por lo que se ejecuta el efecto cada vez que la lista de feriados cambia.