import React from 'react'

export default function IconSwitch({size, color, cname}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cname} width={size} viewBox="0 0 24 24">
            <g fill={color} >
                <polyline data-color="color-2" points="7.929 18.659 2.237 17.073 2.966 22.87" fill="none" stroke={color} stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></polyline><path data-cap="butt" data-color="color-2" d="M23,12A11,11,0,0,1,2.237,17.073" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="2"></path><polyline points="16.071 5.341 21.763 6.927 21.034 1.13" fill="none" stroke={color} stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></polyline><path data-cap="butt" d="M1,12A11,11,0,0,1,21.763,6.927" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="2"></path>
            </g>
        </svg>
    )
}

