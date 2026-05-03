import './intern.css';

function Intern() {
  return (
     <div name="Internships">
       <div className="head" >
          <h3>Internship</h3>
          <span></span>
        </div>
        <br/>
        <div className="interns-wrapper">
          <section className="intern intern-card">
            <div className="v">
                  <div className="v2 v3">
                    <div className="v1"></div>
                    <span>Scholarship</span>
                    <p>Full Stack Web Development using .NET <p>( June 2025 – Dec 2025 )</p></p>
                    <hr/>
                    <p className="p2">Information Technology Institute (ITI)  <p>Grade :  Excellent</p></p>
                    <p>* Completed intensive Full Stack .NET training  </p> 
                    <p>* Applied Clean Architecture, SOLID, and Agile methodologies </p>  
                    <p>* Built real-world full-stack applications</p>
                  </div>
            </div>
          </section>
          <section className="intern intern-card">
            <div className="v">
                  <div className="v2 v3">
                    <div className="v1"></div>
                    <span>Internship</span>
                    <p>Front-End Developer Intern <p>( March 2025 – May 2025 )</p></p>
                    <hr/>
                    <p className="p2">The Egyptian Technological Committee for Programmers  <p>Grade :  Excellent</p></p>
                    <p >Black horse courses academy</p>
                    <p>*Developed responsive web applications using React & Next.js</p>
                    <p>* Improved UI performance and code quality </p>
                    <p>* Gained strong frontend fundamentals</p>
                  </div>
            </div>
          </section>
        </div>
     </div>
  );
}

export default Intern;
