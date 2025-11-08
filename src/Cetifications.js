import React from "react";
import './Cetifications.css';

const certificationsData = [
  { 
    img: "./img/cert1.png",  
    about: "SQL Serve Foundations",
    from: "Microsoft By Coursera",
  },
  { 
    img: "./img/cert2.png",  
    about: "Front-End Development",
    from: "Meta By Coursera",
  },
//   { 
//     img: "./img/cert3.png",  
//     about: "Problem Solving",
//     from: "ECPC Egyptian Collegiate Programming Contest",
//   },
//   { 
//     img: "./img/cert4.png",  
//     about: "Problem Solving",
//     from: "ECPC Egyptian Collegiate Programming Contest",
//   },
  { 
    img: "./img/cert5.jpg",  
    about: "Frontend Internship",
    from: "Black Horse Courses Academy",
  },
  { 
    img: "./img/cert6.png",  
    about: "Problem Solving",
    from: "ECPC Egyptian Collegiate Programming Contest",
  },
  
];

function Cetifications() {
  return (
    <div name="Cetifications">
      <div className="head">
        <h3>Certifications</h3>
        <span></span>
      </div>
      <br/>
      <div className="cert-con container">
        {certificationsData.map((certification, index) => (
          <section className="cert" key={index}>
            <div className="cert-img">
                <img src={certification.img} alt={certification.from} loading="lazy"/>
            </div>
            <span className="spanl" ></span>
            <span className="spanr"></span>
            <div className="cert-p">
                <p>{certification.about}</p>
                <h5>{certification.from}</h5>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Cetifications;
