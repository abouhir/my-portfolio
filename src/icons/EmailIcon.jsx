import React from 'react'

export default function EmailIcon({w,h}) {
    return (
        <svg
            className='animate-contact'
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            enableBackground="new 0 0 512 512"
            viewBox="0 0 512 512"
        >
            <path
                xmlns="http://www.w3.org/2000/svg"
                fill="#eceff1"
                d="M64 64H448V448H64z"
                data-original="#eceff1"
            ></path>
            <path
                xmlns="http://www.w3.org/2000/svg"
                fill="#cfd8dc"
                d="M256 296.384L448 448 448 148.672z"
                data-original="#cfd8dc"
            ></path>
            <path
                xmlns="http://www.w3.org/2000/svg"
                fill="#f44336"
                d="M464 64h-16L256 215.616 64 64H48C21.504 64 0 85.504 0 112v288c0 26.496 21.504 48 48 48h16V148.672l192 147.68L448 148.64V448h16c26.496 0 48-21.504 48-48V112c0-26.496-21.504-48-48-48z"
                data-original="#f44336"
            ></path>
        </svg>
    )
}
