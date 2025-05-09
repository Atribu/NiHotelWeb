import React from 'react'

const AreaSvg = ({className,width,height}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 15" fill="none">
  <path d="M0.5 14V9.35881H1.09622V13.4038H5.14119V14H0.5ZM0.5 5.64119V1H5.14119V1.59622H1.09622V5.64119H0.5ZM8.85881 14V13.4038H12.9038V9.35881H13.5V14H8.85881ZM12.9038 5.64119V1.59622H8.85881V1H13.5V5.64119H12.9038Z" fill="#404040" stroke="#2D2D25" strokeWidth="0.5"/>
</svg>
    </div>
  )
}

export default AreaSvg
