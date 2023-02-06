import React from 'react';
import '../styles/Technicals.css'
import reactLogo from '../Components/images/reactLogo.png'
import javaLogo from '../Components/images/javaLogo.png'
import htmlLogo from '../Components/images/HTMLogo.png'
import cssLogo from '../Components/images/CSSLogo.png'
import bootstrapLogo from '../Components/images/boostrapLogo.png'
import gitLogo from '../Components/images/GitLogo.png'

const TechnicalSkills = () => {
  return (
    <div id="particles-js" className='technical-container'>
      <h1>technical Skills</h1>
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