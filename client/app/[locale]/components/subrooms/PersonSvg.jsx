import React from 'react'

const PersonSvg = ({className,width,height}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 114 113" fill="none">
  <g filter="url(#filter0_d_2430_13835)">
    <path d="M61.5962 58.4038C60.8882 57.6958 60.0456 57.1718 59.1262 56.8545C60.1109 56.1763 60.7578 55.0413 60.7578 53.7578C60.7578 51.6858 59.0721 50 57 50C54.9279 50 53.2422 51.6858 53.2422 53.7578C53.2422 55.0413 53.8891 56.1763 54.8738 56.8545C53.9544 57.1718 53.1118 57.6958 52.4038 58.4038C51.1761 59.6315 50.5 61.2638 50.5 63H51.5156C51.5156 59.9759 53.9759 57.5156 57 57.5156C60.0241 57.5156 62.4844 59.9759 62.4844 63H63.5C63.5 61.2638 62.8239 59.6315 61.5962 58.4038ZM57 56.5C55.488 56.5 54.2578 55.2699 54.2578 53.7578C54.2578 52.2458 55.488 51.0156 57 51.0156C58.512 51.0156 59.7422 52.2458 59.7422 53.7578C59.7422 55.2699 58.512 56.5 57 56.5Z" fill="#2D2D25"/>
  </g>
  <defs>
    <filter id="filter0_d_2430_13835" x="0" y="-1" width="115" height="115" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <floodOpacity floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="25"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.0470588 0 0 0 0 0.160784 0 0 0 0.07 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2430_13835"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2430_13835" result="shape"/>
    </filter>
  </defs>
</svg>
    </div>
  )
}

export default PersonSvg
