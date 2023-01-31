import React, { useState } from 'react';
import imgName from "../Components/images/name.png"
const Nav = () => {

  const [btnChange,setbtnChange] = useState(false)
    
  const[ btnHide, setbtnHide ] = useState(true)

    const btnClick = () =>{
      setbtnChange(!btnChange) 
    }

    const body = document.body.className=btnChange ? "dark" : "active"

    const hideClick = () =>{
      setbtnHide(!btnHide)

    }


  return (
    <nav className='navbar'>
      <div className='container'>
       <a href="#"><img src={imgName} alt="name"className='navImg'/></a> 
       <div className={btnHide ? 'navContent hide' : 'navContent' } >
          <ul className='navList tracking-in-expand '>
            <li> <a href=""> Home </a> </li>
            <li> <a href=""> About Me </a> </li>
            <li> <a href=""> Proyects </a> </li>
            <li> <a href=""> Contact Me </a> </li>
          </ul>
        
        </div>
        <div className='navIcon'>
          <button onClick={btnClick} className={btnChange ? "switch active" : "switch"} id="switch">
           <span><i className="fa-solid fa-sun"></i></span>
           <span><i className="fa-solid fa-moon"></i></span>  
             </button>
        <button onClick={hideClick} className='btn-menu'>
        <i className="fa-solid fa-bars"></i>
        </button>
        
        </div>

        
        
      </div>
    </nav>
  );
};

export default Nav;