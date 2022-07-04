import React from 'react'

export default function CompetenceTitle({Icon , title}) {
    return (
        <div className='parent-icon-title'>
           {Icon}
            <h2 className='icon-title'>{title}</h2>
        </div>
    )
}
