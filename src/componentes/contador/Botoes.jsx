import React from 'react'

export default (props) => {
    return (
        <div>
            <button onClick={e => props.onIncrementar(e)}>+</button>
            <button onClick={e => props.onDecrementar(e)}>-</button>
        </div>
    )
}