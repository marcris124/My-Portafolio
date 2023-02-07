import React from 'react';
import mainImage from "./images/imageMain.jpg"
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <main className='container-main'>
        <div className='main-name'>

          <div className='main-content bounce-in-top'>
            <h1>Hi, I'M
              <br /> Martin Aguirre</h1>
            <p>

            I am a Full Stack web developer focused on the front-end development of web applications and platforms, in which I am always willing to improve my skills, creating projects, facing challenges and with the motivation to continue learning.

            </p>
          </div>
          <div className='main-social bounce-in-top'>
            <ul>
              <li>

                <a target={"_blank"} href="https://www.linkedin.com/in/martin-santiago-38b201244/" className='icon '> <i className="fa-brands fa-linkedin blue"></i> </a>
                <a target={"_blank"} href="https://www.linkedin.com/in/martin-santiago-38b201244/" className='titulo'>Linkedin</a>

              </li>

              <li>
                <a target={"_blank"} href="https://github.com/marcris124" className='icon' style={{ color: "black" }}> <i className="fa-brands fa-square-github white"></i></a>
                <a target={"_blank"} href="https://github.com/marcris124" className='titulo'>GitHub</a>

              </li>
            </ul>
          </div>

        </div>
        <div className='main-image'>
          <div className='figure-1 '></div>
          <img src={mainImage} alt="" className='slide-in-bottom   image  ' />
          <div className='figure-2'></div>
        </div>

      </main>







    </div>
  );
};

export default Home;