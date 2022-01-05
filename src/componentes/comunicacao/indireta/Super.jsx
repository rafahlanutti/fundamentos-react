import React, { useState } from 'react'

import Sub from './Sub'

export default (props) => {
    const [num, setNum] = useState(0)

    function exibirNumeroNoConsole(valor) {
        setNum(valor)

    }
    return (
        <div>
            <h4>
                Valor: {num}
            </h4>
            <Sub quandoClicar={exibirNumeroNoConsole}></Sub>
        </div>
    )
}