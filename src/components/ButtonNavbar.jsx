import React, { useState } from 'react'
import ButtonSubMenu from './ButtonSubMenu';
import { useNavigate } from 'react-router-dom';
const ButtonNavbar = ({ setUrl, item, actualUrl }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const { name, subMenu, url } = item;
    return (
        <li style={{
            background: actualUrl === url ? 'green' : 'yellow'
        }} onClick={() => navigate(url)}
          //  onMouseEnter={() => { setOpen(true) }}
            //onMouseLeave={() => { setOpen(false) }}
        >
            <p>{name}</p>
            {open && <ul style={{
                position: 'absolute',
                background: 'blue',
                color: '#ffffff'
            }}>
                {subMenu.map((item, index) => {
                    return (<ButtonSubMenu key={`${name}-${index}`} name={item.name} />)
                })}
            </ul>}
        </li>
    )
}

export default ButtonNavbar