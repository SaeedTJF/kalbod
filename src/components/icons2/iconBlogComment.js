export function IconBlogComment({ size, color, cname }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cname}
      width={size}
      viewBox="0 0 18 18"
    >
      <g fill={color}>
        <path
          d="M9,1.75C4.996,1.75,1.75,4.996,1.75,9c0,1.319,.358,2.552,.973,3.617,.43,.806-.053,2.712-.973,3.633,1.25,.068,2.897-.497,3.633-.973,.489,.282,1.264,.656,2.279,.848,.433,.082,.881,.125,1.338,.125,4.004,0,7.25-3.246,7.25-7.25S13.004,1.75,9,1.75Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
       
       
      </g>
    </svg>
  );
}