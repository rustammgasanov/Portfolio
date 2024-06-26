import * as React from "react"
const SvgComponent = (props, {width, height}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={height}
    fill="#fff"
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M32 6v20c0 1.135-.865 2-2 2h-2V9.849l-12 8.62-12-8.62V28H2c-1.135 0-2-.865-2-2V6c0-.568.214-1.068.573-1.422A1.973 1.973 0 0 1 2 4h.667L16 13.667 29.333 4H30c.568 0 1.068.214 1.427.578.359.354.573.854.573 1.422z" />
  </svg>
)
export default SvgComponent