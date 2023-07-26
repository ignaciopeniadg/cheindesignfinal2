import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ data = [] }) => {
    return (
        data.map(servicios => <Item key={servicios.id} info={servicios} />)
    )
}

export default ItemList