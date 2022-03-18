import React, { memo } from "react";

const BoasVindas = ({ mensagem, clickBoasVindas }) => {
    console.log('componente boas vindas inicializado')

    return <>
        <h1>Bem vindo</h1>
        <p>{mensagem}</p>
        <button onClick={() => clickBoasVindas("Click button boas vindas")}>
            Clique meu consagrado!
        </button>
    </>
}

export default memo(BoasVindas);