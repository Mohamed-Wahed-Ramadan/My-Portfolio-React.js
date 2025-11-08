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
          <p className='p2'>A passionate Full Stack Developer with hands-on experience in freelancing projects across multiple platforms. 
            Skilled in frontend development using React.js and Angular, and in backend development using ASP.NET Core. 
            Eager to engage with real-world challenges, contribute effective solutions, and grow within a professional 
            environment  
          </p>
          <p>
            Email: mohamed.wahed.work@gmail.com  <br/>
            phone: (+20) 01123002663 <br/>
            Address: Cairo ,Egypt<br/>
          </p>
        {/* </div> */}
      </div>

    </section>
    </div>

  );
}

export default About;
