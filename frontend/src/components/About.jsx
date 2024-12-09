import "./About.css";
const About = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 about-quoat">
        <h3>
          SustainMine: Empowering coal mines to measure their <br /> impact
          today, for a sustainable tomorrow
        </h3>
      </div>

      <div className="row mt-5 fs-5 mb-5 content-container">
        <div className="col-4 offset-1 about-content">
          <p>
            {" "}
            SustainMine is a web application crafted with a vision to help
            Indian coal mines take the critical step toward environmental
            responsibility. <br></br>
            <br></br>
             By offering a comprehensive platform to quantify
            carbon footprints,  mining operations to
            assess their environmental impact accurately. <br></br>
            <br></br>
            We combine data analysis with actionable
            strategies, n achievable goal
            for the coal mining industry. 
          </p>
        </div>
        <div className="col-4 offset-2 about-content">
          <p>
            Our vision is to lead the coal mining industry into a future where
            sustainability and operational efficiency go hand in hand. <br/>
            <br></br>
             By
            providing advanced tools for carbon quantification and actionable
            insights towards carbon neutrality while ensuring
            economic viability.<br/>
            <br></br>
             We understand the critical role coal mines play
            in energy production, but we also recognize the urgent need to
            mitigate their environmental impact. 
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-2 offset-2">
          <img  className="about-image" src="src/assets/bangali.jpg" alt="Bangali" />
        </div>
        <div className="col-2 offset-1">
        <img    className="about-image" src="src/assets/harsh.jpg" alt="harsh" />
        </div>
        <div className="col-2 offset-1">
        <img   className="about-image"  src="src/assets/sachin.jpg" alt="sachin" />
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-2 offset-3">
          <img  className=" about-image" src="src/assets/aman1.jpg" alt="Bangali" />
        </div>
        <div className="col-2 offset-2 ">
        <img    className="  about-image" src="src/assets/bibhash_hack.jpg" alt="harsh" />
        </div>
      </div>




    </div>
  );
};

export default About;
