{/* <path data-cap="butt" d="M22,6H4A2,2,0,0,0,2,8v4" fill="none" stroke="#212121" stroke-miterlimit="10" stroke-width="2"></path><path data-cap="butt" data-color="color-2" d="M2,18H20a2,2,0,0,0,2-2V12" fill="none" stroke="#212121" stroke-miterlimit="10" stroke-width="2"></path><polyline points="18 10 22 6 18 2" fill="none" stroke="#212121" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></polyline><polyline data-color="color-2" points="6 14 2 18 6 22" fill="none" stroke="#212121" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></polyline> */ }

export function IconLoop({ size, color, cname }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cname} width={size} viewBox="0 0 24 24">
            <g fill={color}>
                <path data-cap="butt" d="M22,6H4A2,2,0,0,0,2,8v4" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="2"></path><path data-cap="butt" data-color="color-2" d="M2,18H20a2,2,0,0,0,2-2V12" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="2"></path><polyline points="18 10 22 6 18 2" fill="none" stroke={color} stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></polyline><polyline data-color="color-2" points="6 14 2 18 6 22" fill="none" stroke={color} stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></polyline>
            </g>
        </svg>
    )
}