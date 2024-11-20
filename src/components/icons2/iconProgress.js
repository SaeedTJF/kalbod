export function IconProgress ({size, color, cname}) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className={cname} width={size} viewBox="0 0 24 24">
            <g fill={color}>
                <path
                    d="m5,20c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5ZM21.5,6.5c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm-1,8v.5c0,.552.448,1,1,1s1-.448,1-1v-.5c0-2.481-2.019-4.5-4.5-4.5H4.5c-1.378,0-2.5-1.122-2.5-2.5s1.122-2.5,2.5-2.5h9.728l-1.293,1.293c-.391.391-.391,1.023,0,1.414.195.195.451.293.707.293s.512-.098.707-.293l1.972-1.972c.939-.938.939-2.466,0-3.405L14.284.293c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l1.293,1.293H4.5C2.019,3,0,5.019,0,7.5s2.019,4.5,4.5,4.5h13.5c1.378,0,2.5,1.122,2.5,2.5Zm1,3c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5Zm-7.216-1.207c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l1.293,1.293h-6.163c-.552,0-1,.448-1,1s.448,1,1,1h6.228l-1.293,1.293c-.391.391-.391,1.023,0,1.414.195.195.451.293.707.293s.512-.098.707-.293l1.972-1.972c.939-.938.939-2.466,0-3.405l-2.037-2.037Z"></path>
            </g>
        </svg>
    )
}