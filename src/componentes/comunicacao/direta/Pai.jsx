import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}>Pedro</Filho>
        {/* Passando todas as props para o filho */}
        <Filho sobrenome="Freitas">Marcio</Filho>
        <Filho sobrenome="Freitas">Rafael</Filho>
    </div>