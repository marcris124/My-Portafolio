import React from 'react';
import '../styles/proyects.css'
import pokedex from '../Components/images/pokedex.webp'
import ecomerce from '../Components/images/Ecomerce.webp'
import ApiRandM from '../Components/images/ApiRickAndMorty.webp'
import climApp from '../Components/images/ClimApp.webp'
import reactLogo from '../Components/images/reactLogo2.webp'
import javaLogo from '../Components/images/javaLogo.webp'
import htmlLogo from '../Components/images/HTMLogo2.webp'
import cssLogo from '../Components/images/CSSLogo2.webp'

const Proyects = () => {
  return (
    <div id='proyects' className='proyects-container'>
        <h1>Proyects</h1>
        <div className='content-proyects'>



            <div className='proyects'>
                <img className='img-proyect' src={pokedex} alt="" />
                <div className='proyect-obj'>
                  <div className='proyects-inf'> 
                  
                    <h2> Pokedex</h2>
                  <p>investiga un poco sobre tu pokemon favorito</p>
                        
                    <div className='proyect-skills'>
                    <div className='img-skils-Pro react'> <img src={reactLogo} alt="React-logo" />   </div>  
                      <div className='img-skils-Pro java'> <img src={javaLogo} alt="JsLogo" />   </div>  
                       <div className='img-skils-Pro html'> <img src={htmlLogo} alt="Html-logo" />   </div>
                       <div className='img-skils-Pro css'> <img src={cssLogo} alt="Css-logo" />   </div>
                    </div>



                    <a target={"_blank"} href="https://pokedex-msa.netlify.app/">
                      ver proyecto</a>
                  </div>

                </div>
                
            </div>

            <div className='proyects'>
                 <img className='img-proyect' src={ecomerce} alt="" />
                <div className='proyect-obj'>
                  <div className='proyects-inf'> 
                  
                    <h2> E-comerce</h2>
                     <p>Sitio online para comprar y vender productos</p>

                    <div className='proyect-skills'>
                      <div className='img-skils-Pro java'> <img src={javaLogo} alt="JsLogo" />   </div>  
                       <div className='img-skils-Pro html'> <img src={htmlLogo} alt="Html-logo" />   </div>
                       <div className='img-skils-Pro css'> <img src={cssLogo} alt="Css-logo" />   </div>
                    </div>
                 
                        <a target={"_blank"} href="https://e-comerce-msa.netlify.app/#/login">ver proyecto</a>
                  </div>

                </div>
                
            </div>
            <div className='proyects'>
                <img className='img-proyect' src={ApiRandM} alt="" />
                <div className='proyect-obj'>
                  <div className='proyects-inf'> 
                  
                    <h2> Ricky and Morty </h2>
                <p>busca cualquier dimencion de Rick & Morty por su id</p>
                    <div className='proyect-skills'>
                      <div className='img-skils-Pro java'> <img src={javaLogo} alt="JsLogo" />   </div>  
                       <div className='img-skils-Pro html'> <img src={htmlLogo} alt="Html-logo" />   </div>
                       <div className='img-skils-Pro css'> <img src={cssLogo} alt="Css-logo" />   </div>
                    </div>
                 
                        <a target={"_blank"} href="https://entregable-3-ms.netlify.app/">ver proyecto</a>
                  </div>

                </div>
                
            </div>
            <div className='proyects'>
                <img className='img-proyect' src={climApp} alt="" />
                <div className='proyect-obj'>
                  <div className='proyects-inf'> 
                  
                    <h2> Weather App </h2>
                <p>Activa tu ubicacion para ver el clima de tu zona</p>
                    <div className='proyect-skills'>
                      <div className='img-skils-Pro java'> <img src={javaLogo} alt="JsLogo" />   </div>  
                       <div className='img-skils-Pro html'> <img src={htmlLogo} alt="Html-logo" />   </div>
                       <div className='img-skils-Pro css'> <img src={cssLogo} alt="Css-logo" />   </div>
                    </div>
                 
                        <a target={"_blank"} href="https://entregable-2-clima-martin-santiago.netlify.app/">ver proyecto</a>
                  </div>

                </div>
                
            </div>

        
    
      

        </div>
    </div>
  );
};

export default Proyects;