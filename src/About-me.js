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
          <p className='p2'>A dedicated Full Stack Developer specializing in building scalable and efficient web applications. Skilled in designing
                  seamless, responsive solutions that integrate front-end and back-end technologies. Proven ability to drive technical
                  excellence and deliver business value through maintainable, high-performance software. Committed to leveraging
                  expertise to contribute to dynamic software development teams. 
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
