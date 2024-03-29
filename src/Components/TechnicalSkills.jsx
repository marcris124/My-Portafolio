import React from 'react';
import '../styles/Technicals.css'
import reactLogo from '../Components/images/reactLogo.webp'
import javaLogo from '../Components/images/javaLogo.webp'
import htmlLogo from '../Components/images/HTMLogo.webp'
import cssLogo from '../Components/images/CSSLogo.webp'
import bootstrapLogo from '../Components/images/boostrapLogo.webp'
import gitLogo from '../Components/images/GitLogo.webp'

import Particle from '../Components/Particle'


const TechnicalSkills = () => {
  return (
    <div id='skills'  className='technical-container'>
      {<Particle/>}
      <h1>technical Skills</h1>
      <div className='skills-content'>
        <ul className='skills'>
          <li style={{"--color":"#ef436b"}}>
            <span className='base'></span>
            <span className='title'><span className='white'> HTML5</span> </span>
            <span className='icon'> <i className="fa-brands fa-html5 fa-bounce"></i> </span>
          </li>
          <li style={{"--color":"#0673ff"}} >
            <span className='base'></span>
            <span className='title'> <span className='white'>CSS</span>  </span>
            <span className='icon'><i className="fa-brands fa-css3-alt fa-bounce"></i></span>
          </li>
          <li style={{"--color":"#ffe519"}} >
            <span className='base'></span>
            <span className='title'> <span className='white'>JavaScript</span> </span>
            <span className='icon'><i className="fa-brands fa-square-js fa-bounce"></i></span>
          </li>
          <li style={{"--color":"#00e2ef"}} >
            <span className='base'></span>
            <span className='title'><span className='white'> React</span>  </span>
            <span className='icon'><i className="fa-brands fa-react fa-bounce"></i></span>
          </li>
          <li style={{"--color":"lime"}}>
            <span className='base'></span>
            <span className='title'><span className='white'> NODE Js</span> </span>
            <span className='icon'><i className ="fa-brands fa-node fa-bounce"></i> </span>
          </li>
        </ul>
      </div>



      <div  className="carrosel">
            <div className="caixa__card cc__1">
              <img src={javaLogo} alt="JsLogo" />
              JavaScript
            </div>
            <div className="caixa__card cc__2">
              <img src={htmlLogo} alt="Html-logo" />
            </div>
            <div className="caixa__card cc__3">
              <img src={cssLogo} alt="Css-logo" />
            </div>
            <div className="caixa__card cc__4">
              <img src={reactLogo} alt="Reack-logo" />
            </div>

            <div className="caixa__card cc__5">
              <img src={bootstrapLogo} alt="Boostrap-Logo"/>
              Boostrap
            </div>
            <div className="caixa__card cc__6">
              <img src={gitLogo} alt="Git-logo" />
              Git
            </div>
  
        </div>
      
    </div>
  );
};

export default TechnicalSkills;