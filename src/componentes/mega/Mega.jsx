import React, { useState } from 'react'

export default (props) => {
    const [numero, setNumero] = useState(Array(props.qtdNumero).fill(0));

    function gerarNumerosNaoContido(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min

        return array.includes(novoNumero) ? gerarNumerosNaoContido(array)
            : novoNumero
    }

    function gerarNumeros(value) {
        const novoArray = Array(props.qtdNumero)
            .fill(0)
            .reduce(a => [...a, gerarNumerosNaoContido(a)], [])
            .sort((a, b) => a - b)
        setNumero(novoArray)
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{numero.join(' ')}</h4>
            <button onClick={e => gerarNumeros(e)}>Gerar Numeros</button>
        </>
    )
}