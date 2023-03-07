import React, { useEffect, useState } from 'react';
import imgName from "../Components/images/name.webp"
const Nav = () => {

  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("var(--nav-color)") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);




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
    <nav className='navbar'
      style={{backgroundColor:navColor,
                height:navSize,
                transition:"all 1s" ,
                color:navColor   
                
              }}
    >
      <div className='container'>
       <a href="#"><img src={imgName} alt="name"className='navImg'/></a> 
       <div className={btnHide ? 'navContent hide' : 'navContent' } >
          <ul className='navList tracking-in-expand '>
            <li> <a href="#"> Home </a> </li>
            <li> <a href="#skills"> Skills </a> </li>
            <li> <a href="#proyects"> Proyects </a> </li>
            <li> <a href="#contact-me"> Contact Me </a> </li>
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