import React, { useState } from 'react'

const ButtonSubMenu = ({ name }) => {
    const [open, setOpen] = useState(false);
    return (
        <li style={{
            position: 'relative',
        }}
            onMouseEnter={() => { setOpen(true) }}
            onMouseLeave={() => { setOpen(false) }}>
            <p>
                {name}
            </p>
            {open&&<p style={{
                position: 'absolute',
                top: '-20px',
                right: '-50px',
                background: 'red'
            }}>ejemplo</p>}
        </li>
    )
}

export default ButtonSubMenu