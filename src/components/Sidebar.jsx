import React, { useState, useEffect } from 'react'

const Sidebar = ({ nombre }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [color, setColor] = useState('yellow')
    const [opacity, setOpacity] = useState(1);
    const [name, setName] = useState('');
    const [fail, setFail] = useState(false);

    useEffect(() => {
        if (name.length < 10 && name !== '') {
            setFail(true);
        }
    }, [name]);
    const updateMousePosition = (event) => {
        console.log('mover')
        //setMousePosition({ x: event.clientX, y: event.clientY })
        setMousePosition({ ...mousePosition, x: event.clientX, y: event.clientY })
    }
    useEffect(() => {
        //console.log('hola')
        window.addEventListener('mousemove', updateMousePosition)
        return () => {
            //console.log('adios')
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, []);
    useEffect(() => {
        if (mousePosition.x <= 300) {
            setOpacity(1 - mousePosition.x / 300)
        } else {
            setOpacity(0)
        }
    }, [mousePosition.x]);
    useEffect(() => {
        if (mousePosition.y <= 400) {
            setColor('yellow')
        } else if (mousePosition.y <= 800) {
            setColor('red');
        } else {
            setColor('blue');
        }
    }, [mousePosition.y]);
    const nameChange = (e) => {
        setName({ ...name, [`${e.target.name}`]: e.target.value })
    }
    return (
        <div style={{
            backgroundColor: color,
            opacity: opacity
        }}>
            <p>{nombre}</p>
            <input name='name' onChange={nameChange} />
            <p>{mousePosition.x}</p>
            <p>{mousePosition.y}</p>
        </div>
    )
}

export default Sidebar