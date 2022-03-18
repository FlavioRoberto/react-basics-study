import React, { useCallback, useEffect, useState } from "react";
import BoasVindas from "./BoasVindas";

const About = () => {
    console.log('About component');
    const [alimentos] = useState(['Banana', 'Maçã']);
    const [contador, setContador] = useState(0);

    //init
    useEffect(() => {
        console.log('init');
    }, []);

    //change contador
    useEffect(() => {
        console.log('change');
    }, [contador]);

    //destroy
    useEffect(() => {
        console.log('destroy');
        return () => { console.log('About destruido') };
    }, []);

    const valorCallback = useCallback(() => {
        console.log(`Contador alterado para ${contador}`);
        return 'valor contador alterado para ' + contador;
    }, [contador])

    return <>
        {alimentos.map((alimento, i) => <h1 key={i}>Hello {alimento}</h1>)}
        {alimentos[1] === "Maçã" && <p>Olá maçã</p>}
        <button onClick={() => setContador(valorAnterior => valorAnterior += 1)}>
            Incrementar {contador}
        </button>
        <p>{valorCallback()}</p>
        <BoasVindas mensagem="Ok boomer" clickBoasVindas={mensagem => console.log(mensagem)} />
    </>
}

export default About;