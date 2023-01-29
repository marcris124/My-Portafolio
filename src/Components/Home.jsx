import React from 'react';
import	mainImage from "./images/imageMain.jpg"
import '../styles/Home.css'
const Home = () => {
  return (
    <div className='home-container'>
      <main className='container-main'>
     <div  className='main-name'>

        <div className='main-content'>
          <h1>Hi, I'M  
            <br /> Martin Aguirre</h1>
            <p>
              
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deleniti facere aut cupiditate nisi? Rerum alias nemo cum itaque iste error optio ratione sed. Sapiente autem harum culpa veritatis expedita.
          
            </p>
          </div>
          <div className='main-social'>
  <ul>
        <li>
          
            <a  href="https://www.linkedin.com/in/martin-santiago-38b201244/" className='icon '> <i className="fa-brands fa-linkedin blue"></i> </a>
            <a href="https://www.linkedin.com/in/martin-santiago-38b201244/" className='titulo'>Linkedin</a>

        </li>

        <li>
            <a href="https://github.com/marcris124" className='icon' style={{color:"black"}}> <i className="fa-brands fa-square-github white"></i></a>
            <a href="https://github.com/marcris124" className='titulo'>GitHub</a>

        </li>
      </ul>
          </div>

        </div>
          <div className='main-image'>
            <div className='figure-1'></div>
            <img src={mainImage} alt="" className='image' />
            <div className='figure-2'></div>
          </div>

      </main>


    




    </div>
  );
};

export default Home;