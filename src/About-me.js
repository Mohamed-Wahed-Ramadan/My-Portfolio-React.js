import './About-me.css';

function About() {
  return (
    <div name="about">
        <div className="head">
          <h3>About me</h3>
          <span></span>
        </div>
        <br/>
    <section className="about1">
      <div className="w22">
        <div className="my-img2">
          <img src="./img/moh.jpg" alt="mohamed wahed photo" loading="lazy"/>
        </div>
      </div>
      <div className="my-dis">
        {/* <div className="my-dis-con"> */}
          <h3>Professional Summary </h3>
          <p className='p2'>Full-stack developer with nearly 2 years of experience delivering 5+ production systems. Skilled in ASP.NET 
              Core, React.js, and Next.js for building real-time dashboards, admin portals, and responsive web apps. Strong 
              background in JWT authentication, REST API development, and real-time communication.  
          </p>
          <p>
            Email: mohamed.wahed.work@gmail.com  <br/>
            phone: (+20) 01123002663 <br/>
            Address: Maadi, Cairo ,Egypt<br/>
          </p>
        {/* </div> */}
      </div>

    </section>
    </div>

  );
}

export default About;
