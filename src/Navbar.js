import React from 'react'
import {Outlet,Link,NavLink}  from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <NavLink to="/" style={({isActive})=>{
          return {background:isActive?"black":''}}}>Home</NavLink> |
        <Link to="/aboutus">About</Link> |
        <Link to="/aboutus/123">About used id</Link>
        <Outlet />
    </div>
  )
}

export default Navbar