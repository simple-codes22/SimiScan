import React from "react";
import '../CSS/Copy.css';

const contentCopy =`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1rem"
        height="1rem"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="#d4d4d4"
          d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"
        />
      </svg>
      `


const Copied = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1rem"
        height="1rem"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="#d4d4d4"
          d="M19 19H5v-2h14v2Zm-9-4.58l-4-4l1.41-1.41L10 11.59L16.59 5L18 6.42l-8 8Z"
        />
      </svg>
      <span className='Copied'>Copied</span>
`
export const ToggleCopy = ({ number }) => {
  const className_ = `special-copy ${number}`

  return (
    <span title='Copy to Clipboard' className={className_} onClick={
      () => {
        const copyBtn = document.querySelector(`.${number}`)
        copyBtn.innerHTML = Copied;
        const text = copyBtn.parentNode.firstChild.getAttribute('title');
        navigator.clipboard.writeText(text)
        setTimeout(() => {
          copyBtn.innerHTML = contentCopy;
        }, 5000);
        return
      }
    }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1rem"
        height="1rem"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="#d4d4d4"
          d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"
        />
      </svg>
    </span>
  )
}