import { memo } from 'react'
import Item from '../../components/item/Item.js'
import React from 'react'
// memo( ()=>{} ) es el componente // memo( ()=>{}, fn ) es el componente
const ItemList = memo(
    ({productos}) => {
        console.log('ItemList')
        return (
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }} 
            >
                {productos.map((prod) => 
                    <Item key={prod.id} prod={prod} />
                )}
            </div>
        )
    }
, (oldProps, newProps) => oldProps.productos.length === newProps.productos.length)


export default ItemList
