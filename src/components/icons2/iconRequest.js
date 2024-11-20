export function IconRequest({ size, color, cname }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cname}
            width={size}
            viewBox="0 0 24 24"
        >
            <g fill={color}>
                <path d="m2,12c0,.552-.448,1-1,1s-1-.448-1-1C0,5.383,5.383,0,12,0c2.987,0,5.812,1.113,8,3.077V1c0-.552.447-1,1-1s1,.448,1,1v3.5c0,1.378-1.121,2.5-2.5,2.5h-3.5c-.553,0-1-.448-1-1s.447-1,1-1h3.126c-1.875-1.911-4.423-3-7.126-3C6.486,2,2,6.486,2,12Zm21-1c-.553,0-1,.448-1,1,0,5.514-4.486,10-10,10-2.703,0-5.251-1.089-7.127-3h3.127c.552,0,1-.448,1-1s-.448-1-1-1h-3.5c-1.378,0-2.5,1.122-2.5,2.5v3.5c0,.552.448,1,1,1s1-.448,1-1v-2.077c2.187,1.964,5.013,3.077,8,3.077,6.617,0,12-5.383,12-12,0-.552-.447-1-1-1Zm-5.304-1.134l-.974.562c.166.497.278,1.019.278,1.572s-.111,1.075-.278,1.572l.974.562c.479.276.643.888.366,1.366-.186.321-.521.5-.867.5-.17,0-.342-.043-.499-.134l-.973-.562c-.705.794-1.644,1.375-2.723,1.594v1.101c0,.552-.448,1-1,1s-1-.448-1-1v-1.101c-1.079-.22-2.018-.801-2.723-1.594l-.973.562c-.158.091-.33.134-.499.134-.346,0-.682-.179-.867-.5-.276-.479-.112-1.09.366-1.366l.974-.562c-.166-.497-.278-1.019-.278-1.572s.111-1.075.278-1.572l-.974-.562c-.478-.276-.642-.888-.366-1.366.276-.479.886-.643,1.366-.366l.973.562c.705-.794,1.644-1.375,2.723-1.594v-1.101c0-.552.448-1,1-1s1,.448,1,1v1.101c1.079.22,2.018.801,2.723,1.594l.973-.562c.477-.277,1.089-.113,1.366.366.276.479.112,1.09-.366,1.366Zm-2.696,2.134c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Z"></path>
            </g>
        </svg>
    );
}