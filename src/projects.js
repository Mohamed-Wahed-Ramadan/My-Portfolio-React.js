import './projects.css';



const projects = [
  { videourl:"./img/v0.mp4",//my portoflio
    livedemo:"https://mohamed-wahed-portoflio.netlify.app/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/mohamed%20wahed%20portoflio/myapp",
    tools:" HTML - CSS - JavaScript - Media query - Bootstrap - Emailjs - React.js - GSAP  "
  },
  { videourl:"./img/v1.mp4",//the restuarant
    livedemo:"https://menu-restaurant-wahed.netlify.app/signup.html",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/Menu%20Restaurant",
    tools:" HTML - CSS - JavaScript - Media query - Bootstrap - Emailjs "
  },
  { videourl:"./img/v2.mp4",//the market
    livedemo:"https://fanciful-bublanina-325d5c.netlify.app/home.html",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/The%20Market",
    tools:" HTML - CSS - JavaScript - Media query - Bootstrap "
  },
  { videourl:"./img/v3.mp4",//civil company
    livedemo:"https://thriving-gumption-303d40.netlify.app/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/Bootstap%26JavaScript",
    tools:" HTML - CSS - JavaScript - Media query - Bootstrap "
  },
  { videourl:"./img/v4.mp4",//carna
    livedemo:"https://animated-llama-215ab2.netlify.app/sign%20up.html",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/Carna",
    tools:" HTML - CSS - JavaScript - Media query - JQuery"
  },
  { videourl:"./img/v5.mp4",//lite portoflio
    livedemo:"https://subtle-fox-d4143a.netlify.app/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/HTML5%26CSS3-media_query",
    tools:" HTML - CSS - JavaScript - Media query "
  },
  { videourl:"./img/v6.mp4",//xo
    livedemo:"",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/XO",
    tools:" HTML - CSS - Media query - JavaScript "
  },
  { videourl:"./img/v7.mp4",//chairsapp
    livedemo:"https://preeminent-meringue-066af4.netlify.app/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/HTML5%26CSS3-Project",
    tools:" HTML - CSS "
  },
  { videourl:"./img/v8.mp4",//first project
    livedemo:"https://visionary-axolotl-de9dfd.netlify.app/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/first%20project-HTML-CSS",
    tools:" HTML - CSS "
  },
  
];


function Projects() {
  return (
    <div name="Projects">
        <div className="head">
          <h3>Projects</h3>
          <span></span>
        </div>
        <br/>
        <div className="pro-con container">
            {projects.map((project, index) => (
            <section className="pro">
                <video src={project.videourl} controls></video>
                <div className="pro-btn">
                    <button onClick={() => window.open(project.livedemo, "_blank")}>Live Demo</button>
                    <button onClick={() => window.open(project.github, "_blank")}>Github</button>
                </div>
                <p>{project.tools}</p>
            </section>
            ))}
        </div>
    </div>

  );
}

export default Projects;
