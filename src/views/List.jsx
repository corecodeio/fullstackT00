import React from 'react'
import {useParams}from 'react-router-dom';
const List = () => {
    const {name} = useParams();
    //console.log(params)
  return (
    <div>name:{name}</div>
  )
}

export default List