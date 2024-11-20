export function IconCommment({ size, color, cname }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cname}
      width={size}
      viewBox="0 0 24 24"
    >
      <g fill={color}>
        <path
          d="M21,1H3C1.346,1,0,2.346,0,4V15c0,1.654,1.346,3,3,3H7.52l3.7,4.625c.189,.237,.477,.375,.781,.375s.591-.138,.781-.375l3.7-4.625h4.52c1.654,0,3-1.346,3-3V4c0-1.654-1.346-3-3-3Z"
         
        ></path>
      </g>
    </svg>
  );
}