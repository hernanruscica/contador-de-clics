import React from "react";

import '../hojas-de-estilo/Boton.css';

/*Recibe los props con desestructuracion de parametros.
 1. texto del boton 
 2.booleano si btn de click
 3. la funcion que se dispara en el event listenner */
function Boton({texto, esBotonDeClick, manejarClick}) {
    return (
        <button className = { esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
            onClick = {manejarClick}>
            {texto}
        </button>
    )
}

export default Boton;