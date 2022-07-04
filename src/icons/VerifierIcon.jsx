import React from 'react';

const VerifierIcon = ({ w, h }) => {
    return (
        <svg
            width={w}
            height={h}
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 512 512"
            viewBox="0 0 2.54 2.54"
        >
            <g xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx="1.27"
                    cy="1.27"
                    r="1.27"
                    fill="#00ba00"
                    data-original="#00ba00"
                ></circle>
                <path className="animate-pulse"
                    fill="#fff"
                    d="M.873 1.89L.41 1.391a.17.17 0 01.008-.24.17.17 0 01.24.009l.358.383.567-.53a.17.17 0 01.016-.013l.266-.249a.17.17 0 01.24.008.17.17 0 01-.008.24l-.815.76-.283.263-.125-.134z"
                    data-original="#ffffff"
                ></path>
            </g>
        </svg>
    );
}

export default VerifierIcon;
