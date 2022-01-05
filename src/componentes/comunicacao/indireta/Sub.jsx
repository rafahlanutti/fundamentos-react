import React from 'react'

export default (props) => {

    return (
        <div>
            <button onClick={() => {
                props.quandoClicar(Math.random())
            }}>Alterar
            </button>
        </div>
    )
}
