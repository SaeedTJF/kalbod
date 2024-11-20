export function IconQue({ size, color, cname }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cname}
            width={size}
            viewBox="0 0 24 24"
        >
            <circle cx="12" cy="12" r="11" fill="none" stroke={color} stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><circle data-color={color} data-stroke="none" cx="12" cy="18" r="1" stroke={color}></circle><path data-color="color-2" d="M9.853,6.56c1.98-.875,4.542-.771,5.417.645s.271,3.063-1.229,4.334S12,13.5,12,14.5" fill="none" stroke={color} stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
        </svg>
    );
}