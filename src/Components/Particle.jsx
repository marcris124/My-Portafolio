import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import React from 'react';

const Particle = () => {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  }

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    
    options={
      {
        "fullScreen": {
          "enable": true,
          "zIndex": 1
      },
      "particles": {
        "number": {
          "value": 25,
          "density": {
            "enable": true,
            "value_area": 552.4033491425909
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 2,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 3
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.7023414010527227,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": true
          }
        },
        "size": {
          "value": 19.728691040806815,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 11,
            "size_min": 34.36563436563437,
            "sync": true
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0,
          "width": 0
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": true,
          "out_mode": "bounce",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 1282.7296486924183,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {      
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 280.1666382439641,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 267.9854800594439,
            "size": 28.42270243054708,
            "duration": 2,
            "opacity": 0.9744926547616142,
            "speed": 1
          },
          "repulse": {
            "distance": 454.7632388887533,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true

        // "particles": {
        //   "number": {
        //     "value": 80,
        //     "density": {
        //       "enable": true,
        //       "value_area": 800
        //     }
        //   },
        //   "color": {
        //     "value": "#ffffff"
        //   },
        //   "shape": {
        //     "type": "circle",
        //     "stroke": {
        //       "width": 0,
        //       "color": "#000000"
        //     },
        //     "polygon": {
        //       "nb_sides": 5
        //     },
        //     "image": {
        //       "src": "img/github.svg",
        //       "width": 100,
        //       "height": 100
        //     }
        //   },
        //   "opacity": {
        //     "value": 0.5,
        //     "random": false,
        //     "anim": {
        //       "enable": false,
        //       "speed": 1,
        //       "opacity_min": 0.1,
        //       "sync": false
        //     }
        //   },
        //   "size": {
        //     "value": 3,
        //     "random": true,
        //     "anim": {
        //       "enable": false,
        //       "speed": 40,
        //       "size_min": 0.1,
        //       "sync": false
        //     }
        //   },
        //   "line_linked": {
        //     "enable": true,
        //     "distance": 150,
        //     "color": "#ffffff",
        //     "opacity": 0.4,
        //     "width": 1
        //   },
        //   "move": {
        //     "enable": true,
        //     "speed": 2,
        //     "direction": "none",
        //     "random": false,
        //     "straight": false,
        //     "out_mode": "out",
        //     "bounce": false,
        //     "attract": {
        //       "enable": false,
        //       "rotateX": 600,
        //       "rotateY": 1200
        //     }
        //   }
        // },
        // "interactivity": {
        //   "detect_on": "canvas",
        //   "events": {
        //     "onhover": {
        //       "enable": true,
        //       "mode": "repulse"
        //     },
        //     "onclick": {
        //       "enable": true,
        //       "mode": "push"
        //     },
        //     "resize": true
        //   },
        //   "modes": {
        //     "grab": {
        //       "distance": 400,
        //       "line_linked": {
        //         "opacity": 1
        //       }
        //     },
        //     "bubble": {
        //       "distance": 400,
        //       "size": 40,
        //       "duration": 2,
        //       "opacity": 8,
        //       "speed": 3
        //     },
        //     "repulse": {
        //       "distance": 200,
        //       "duration": 0.4
        //     },
        //     "push": {
        //       "particles_nb": 4
        //     },
        //     "remove": {
        //       "particles_nb": 2
        //     }
        //   }
        // },
        // "retina_detect": true

    }
    }
    />
  );
};

export default Particle;