import React from 'react'

export default function ReactIcon({ cls }) {
  return (
    <svg
      className={cls}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.232 23 20.463"
    >
      <circle r="2.05" fill="#61dafb"></circle>
      <g fill="none" stroke="#61dafb">
        <ellipse rx="11" ry="4.2"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  )
}
