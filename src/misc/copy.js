import React from "react";

const ContentCopy = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="#d4d4d4"
          d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"
        />
      </svg>
    </>
  );
};

const Copied = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="#d4d4d4"
          d="M19 19H5v-2h14v2Zm-9-4.58l-4-4l1.41-1.41L10 11.59L16.59 5L18 6.42l-8 8Z"
        />
      </svg>
    </>
  );
};

export const ToggleCopy = ({state_}) => {
  if (state_ === 0) {
    return <ContentCopy />
  } else if (state_ === 1) {
    return <Copied />
  }
}