import React from 'react'

import products from './produtos'

export default props => {

    function getProductsListItem() {
        return products.map(p => {
            return < li key={p.id} > {p.id} - {p.name} -- ${p.price}</li >
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProductsListItem()}
            </ul>
        </div>
    )
}