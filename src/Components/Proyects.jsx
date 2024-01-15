import React from 'react';
import '../styles/proyects.css'
import disneyPlus from '../Components/images/disney-plus-image.webp'
import pokedex from '../Components/images/pokedex.webp'
import ecomerce from '../Components/images/Ecomerce.webp'
import ApiRandM from '../Components/images/ApiRickAndMorty.webp'
import climApp from '../Components/images/ClimApp.webp'
import reactLogo from '../Components/images/reactLogo2.webp'
import javaLogo from '../Components/images/javaLogo.webp'
import htmlLogo from '../Components/images/HTMLogo2.webp'
import cssLogo from '../Components/images/CSSLogo2.webp'
import tailwindLogo from '../Components/images/tailwind-logo.webp'

const Proyects = () => {

  const ProyectList = [
    {
      id: 1,
      image: pokedex,
      name: "Pokedex",
      description: "Investiga un poco sobre tu Pokémon favorito",
      skills: [
        { id: 1, image: reactLogo },
        { id: 2, image: javaLogo },
        { id: 3, image: htmlLogo },
        { id: 4, image: cssLogo },
      ],
      link: "https://pokedex-msa.netlify.app/",
    },
    {
      id: 2,
      image: ecomerce,
      name: "E-commerce",
      description: "Sitio online para comprar y vender productos",
      skills: [
        { id: 2, image: javaLogo },
        { id: 3, image: htmlLogo },
        { id: 4, image: cssLogo },
      ],
      link: "https://e-comerce-msa.netlify.app/#/login",
    },
    {
      id: 3,
      image: ApiRandM,
      name: "Ricky and Morty",
      description: "Busca cualquier dimensión de Rick & Morty por su ID",
      skills: [
        { id: 2, image: javaLogo },
        { id: 3, image: htmlLogo },
        { id: 4, image: cssLogo },
      ],
      link: "https://entregable-3-ms.netlify.app/",
    },
    {
      id: 4,
      image: climApp,
      name: "Weather App",
      description: "Activa tu ubicación para ver el clima de tu zona",
      skills: [
        { id: 2, image: javaLogo },
        { id: 3, image: htmlLogo },
        { id: 4, image: cssLogo },
      ],
      link: "https://entregable-2-clima-martin-santiago.netlify.app/",
    }, {
      id: 5,
      image: disneyPlus,
      name: "disney-clone",
      description: "un clone de disney plus para ver trailers y descripciones de algunas peliculas",
      skills: [
        { id: 2, image: javaLogo },
        { id: 3, image: htmlLogo },
        { id: 4, image: cssLogo },
        { id: 5, image: tailwindLogo },
      ],
      link: "https://disney-plus-clone-v1.netlify.app/",
    },
  ];


  return (
    <div id="proyects" className="proyects-container">
    <h1>Projects</h1>
    <div className="content-proyects">
      {ProyectList.map((project) => (
        <div key={project.id} className="proyects">
          <img className="img-proyect" src={project.image} alt="" />
          <div className="proyect-obj">
            <div className="proyects-inf">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="proyect-skills">
                {project.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className={`img-skils-Pro ${skill.image}`}
                  >
                    <img src={skill.image} alt={`${skill.image}-logo`} />
                  </div>
                ))}
              </div>
              <a target={"_blank"} href={project.link}>
                Ver proyecto
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Proyects;