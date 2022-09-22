import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Navbar from './components/Navbar';
import NotFound from './views/NotFound';
import List from './views/List';
import Panel from './components/Panel';
import FormularioFormik from './components/FormularioFormik';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />}>
                    <Route path='panel' element={<Panel />} />
                    <Route path='formik' element={<FormularioFormik />} />
                </Route>
                <Route path='/list/:name' element={<List />} />
                <Route path='*' element={<NotFound />} />
                {/*<Route path='*' element={<Navigate to='/' />} />*/}
            </Routes>
        </BrowserRouter>
    )
}

export default App