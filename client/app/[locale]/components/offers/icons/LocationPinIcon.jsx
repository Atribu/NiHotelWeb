import React from "react";

function LocationPinIcon({ className }) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1.3em"
        viewBox="0 0 9 13"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 6.53456C3.2356 6.53456 2.21063 5.54805 2.21063 4.3311C2.21063 3.11415 3.2356 2.12764 4.5 2.12764C5.7644 2.12764 6.78937 3.11415 6.78937 4.3311C6.78937 5.54805 5.7644 6.53456 4.5 6.53456ZM1.31967 1.26318C1.3336 1.25 1.34729 1.2366 1.36122 1.22365L1.36722 1.21811C2.21352 0.431769 3.34583 0.00323596 4.5 0C5.65417 0.00323596 6.78672 0.432 7.63302 1.21811L7.63878 1.22365L7.68033 1.26318C9.08498 2.61627 9.43824 4.76795 8.40006 6.49827L4.49976 13L0.599936 6.49827C-0.43824 4.76795 -0.0849764 2.61627 1.31967 1.26318Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default LocationPinIcon;