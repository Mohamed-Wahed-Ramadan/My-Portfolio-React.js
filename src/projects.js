import './projects.css';



const projects = [
  { videourl:"./img/v05.mp4",//clinic management system
    livedemo:"",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Clinic-API-Project",
    tools:"OOP, C#, .NET Entity Framework Core, LINQ, Onion Architecture, ASP.NET API, Swagger, UI, SQL"
  },
  { videourl:"./img/v04.mp4",//e-commerce Dukkan waffle
    livedemo:"https://dukkanwaffle.runasp.net/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Restaurent-MVC-Project",
    tools:".NET Entity Framework Core LINQ Onion Architecture ASP.NET Core MVC HTML5 CSS3 Bootstrap JavaScript SQL"
  },
  { videourl:"./img/v02.mp4",//e-commerce windows form
    livedemo:"",
    github:"https://github.com/Mohamed-Wahed-Ramadan/E-Commerce-project",
    tools:" C# & .NET OOP Entity Framework Core Onion Architecture Windows Form SQL"
  },
  { videourl:"./img/v01.mp4",//library console app
    livedemo:"",
    github:"https://github.com/Mohamed-Wahed-Ramadan/OOP-Console-app-Library-",
    tools:" C# & .NET OOP "
  },
  { videourl:"./img/v0.mp4",//my portfolio
    livedemo:"https://mohamedkoriem.store/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/My-Portfolio-React.js",
    tools:" HTML - CSS - JavaScript - Media query - Bootstrap - Emailjs - React.js - GSAP  "
  },
  { videourl:"./img/v1.mp4",//the restuarant
    livedemo:"https://menu-restaurant-wahed.netlify.app/signup.html",
    github:"https://github.com/Mohamed-Wahed-Ramadan/E-commerce-Restaurant",
    tools:" HTML - CSS - JavaScript - Media query - Bootstrap - Emailjs "
  },
  { videourl:"./img/v03.mp4",//zatouna store
    livedemo:"https://zaytouna-store.netlify.app/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Zaytouna-Freelance-Project",
    tools:" HTML5 - CSS3 - Bootstrap - JavaScript - Media query - Emailjs"
  },
  { videourl:"./img/v2.mp4",//the market
    livedemo:"https://fanciful-bublanina-325d5c.netlify.app/home.html",
    github:"https://github.com/Mohamed-Wahed-Ramadan/E-commerce-Market",
    tools:" HTML - CSS - JavaScript - Media query - Bootstrap "
  },
  { videourl:"./img/v3.mp4",//civil company
    livedemo:"https://thriving-gumption-303d40.netlify.app/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Architectural-Company",
    tools:" HTML - CSS - JavaScript - Media query - Bootstrap "
  },
  { videourl:"./img/v4.mp4",//carna
    livedemo:"https://animated-llama-215ab2.netlify.app/sign%20up.html",
    github:"https://github.com/Mohamed-Wahed-Ramadan/E-commerce-Carna",
    tools:" HTML - CSS - JavaScript - Media query - JQuery"
  },
  { videourl:"./img/v5.mp4",//lite portoflio
    livedemo:"https://subtle-fox-d4143a.netlify.app/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Ultra-Profile",
    tools:" HTML - CSS - JavaScript - Media query "
  },
  { videourl:"./img/v6.mp4",//xo
    livedemo:"",
    github:"https://github.com/Mohamed-Wahed-Ramadan/XO-Game",
    tools:" HTML - CSS - Media query - JavaScript "
  },
  { videourl:"./img/v7.mp4",//chairsapp
    livedemo:"https://preeminent-meringue-066af4.netlify.app/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/E-commerce-Furniture-Store",
    tools:" HTML - CSS "
  },
  { videourl:"./img/v8.mp4",//first project
    livedemo:"https://visionary-axolotl-de9dfd.netlify.app/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Creative-Agency",
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
