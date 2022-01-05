import React, { useState } from 'react'

export default (props) => {

    const [nome, setNome] = useState('Pedro')
    return (
        <>
            <p> {nome}</p>
            <input value={nome} onChange={e => setNome(e.target.value)} />
        </>

    )
}
