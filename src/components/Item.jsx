import React from 'react'

export default function Item({nombre,status,color , ellipseColor}) {
    return (
        <div className={'item '+color}>
            <div className={'ellipse-item '+ellipseColor}>{nombre}</div>
            <h1 className='text-muted dark:text-white font-k2d text-xl xl:text-2xl'>{status}</h1>
        </div>
    )
}
