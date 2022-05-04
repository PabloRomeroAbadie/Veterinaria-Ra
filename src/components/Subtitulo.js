import React from 'react';

const Subtitulo = ({comision,estado}) => {
    console.log(estado);
    return (
        <div>
            <h3>Tareas de la Comision {comision}</h3>
        </div>
    );
};

export default Subtitulo;