import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="#fff"
    viewBox="0 0 24 24"
    {...props}
  >
    <g strokeLinecap="round" strokeWidth={2}>
      <path d="M5 12h13M5 17h6M5 7h10" />
    </g>
  </svg>
)
export default SvgComponent
