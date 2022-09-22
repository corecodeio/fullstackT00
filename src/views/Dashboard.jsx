import React from 'react'
import { Link, Routes, Route, Outlet, useNavigate, Navigate } from 'react-router-dom';
import Panel from './../components/Panel';
import FormularioFormik from './../components/FormularioFormik'
import { useState } from 'react';
const Dashboard = () => {
  const [loginState, setLoginState] = useState(false)
  //const [panelActual, setPanelActual] = useState('config')
  const navigate = useNavigate();
  if (!loginState){
    return <Navigate to='/'/>
  }
  return (
    <div>Dashboard
      <Link to='/dashboard/'> /dashboard</Link>
      <br />
      <Link to='/dashboard/panel'> panel</Link>
      <br />
      <Link to='/dashboard/formik'> formik</Link>
      <br />
      <Outlet/>
      <button onClick={()=>{
        //borrado de datos y sesion
        navigate('/');
      }}>cerrar session</button>
      {/*<Routes>
        <Route path='panel' element={<Panel />} />
        <Route path='formik' element={<FormularioFormik />} />
  </Routes>*/}
    </div>
  )
}

export default Dashboard