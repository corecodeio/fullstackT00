import React from 'react'

const Button = ({tipo, accion}) => {
  return (
    <button onClick={accion}>{tipo}</button>
  )
}

export default Button