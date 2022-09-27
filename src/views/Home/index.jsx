import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import estilos from './Home.module.css';

const Home = () => {
  const [animacion, setAnimacion] = useState(0)

  return (
    <div>
      <Card style={{ width: '18rem' }} className={estilos[`fondo-${animacion}`]}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title className='clase1'>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home