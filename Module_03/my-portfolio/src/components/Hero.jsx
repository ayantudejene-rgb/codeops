import profilePhoto from "../assets/profilePhoto.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="small-title">
          Hello, I'm
        </p>

        <h1>
          Ayantu D<span>.</span>
        </h1>

        <h2>
          I BUILD <span>DIGITAL EXPERIENCES.</span>
        </h2>

        <p className="hero-description">
          I'm a frontend developer who enjoys turning ideas into
          beautiful, interactive and responsive web experiences.I am also an elecrical engineer graduate from Addis Ababa Science and Technology University.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Work 
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>

      </div>


      <div className="hero-visual">

        <div className="circle-decoration"></div>

        <div className="profile-card">

          <img
            src={profilePhoto}
            alt="Ayantu"
          />

          <div className="profile-label">
            <span></span>
            Developer
          </div>

        </div>



      </div>

    </section>
  );
}

export default Hero;