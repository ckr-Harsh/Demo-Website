import React, { useState, useEffect } from 'react';
import * as Mat from '@material-ui/icons'
import Logo from '../Store/logo.png'

const List = () => {
  return(
    <div className='nav'>
        <a href='/'>Live Classes</a>
        <a href='/'>Video Library</a>
        <a href='/'>Courses</a>
        <a href='/'>Book</a>
        <a href='/'>Board</a>
        <a href='/'>Exam</a>
    </div>
  )
}

const MobileList = () => {
  const [active, setActive] = useState(false);
  return(
    <>
      <span className='menu' onClick={()=>{
        setActive(!active);
      }}>
       {active ? <Mat.AppsTwoTone fontSize='large'/> : <Mat.AppsRounded fontSize='large' /> }
      </span>
      { active && (
        <List />
        )}
    </>
  )
}

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 786px)").matches);

  useEffect(() => {
    window.addEventListener('resize', ()=>{
        setIsMobile(window.matchMedia("(max-width: 786px)").matches);
    })
  })

  return (
      <nav className='Head'>
        <span className='logo'>
            <img alt='logo' src={Logo} width='80' height='80'/>
      </span>
        {isMobile ? (<MobileList/>
        ) :(
          <List/>
        )}
        
      </nav>

  )
}

export default Navbar;
