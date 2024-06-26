import * as React from "react"
const SvgComponent = (props, {width, height}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={height}
    xmlSpace="preserve"
    fill="#fff"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19.2 4.4 2.9 10.7c-1.1.4-1.1 1.1-.2 1.3l4.1 1.3 1.6 4.8c.2.5.1.7.6.7.4 0 .6-.2.8-.4l2-2 4.2 3.1c.8.4 1.3.2 1.5-.7l2.8-13.1c.3-1.1-.4-1.7-1.1-1.3zm-2.1 3-7.8 7.1-.3 3.3L7.4 13l9.2-5.8c.4-.3.8-.1.5.2z" />
    <path
      d="M0 0h24v24H0z"
      style={{
        fill: "none",
      }}
    />
  </svg>
)
export default SvgComponent