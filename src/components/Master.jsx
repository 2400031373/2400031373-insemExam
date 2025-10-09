import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Kids from './Kids'
import Elect from './Elect'
import Fashion from './Fashion'
const Master = () => {
  return (
    <div>
        <Link to="/electronics">Electronics</Link> &nbsp;

<Link to ="/fashion">fashio</Link> &nbsp;

<Link to="/kids">kids</Link>  &nbsp;


      <Routes>
        <Route path='/electronics' element={<Elect></Elect>}></Route>
        <Route path='/fashion' element={<Fashion></Fashion>}> </Route>     
        <Route path='/kids' element={<Kids></Kids>}></Route>
      </Routes>
    </div>
  )
}

export default Master
