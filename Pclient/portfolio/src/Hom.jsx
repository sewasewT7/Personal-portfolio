import "./Hom.css";

function Hom() {
  return (
    <div id="home">
      <div className="home-section home-title-1">
        <h1>
          Web <span>Developer</span>
        </h1>
        <p>
          I’m a React developer who crafts smooth, dynamic interfaces and writes
          code so clean, even my bugs look like features!
        </p>
        <h1>
          Aspiring <span>Machine Learning</span> Engineer
        </h1>
        <p>
          React developer by day, making UIs sparkle; aspiring machine learning
          engineer by night, training models to keep up!
        </p>
      </div>
      <div className="home-section home-img">
        <img src="/src/assets/background.png" alt="home" className="home-pic" />
      </div>
      <div className="home-section home-title-2">
        <h1>
          Software
          <span>Engineering </span>Student
        </h1>
        <p>
          As a software engineering student, I’m fluent in caffeine and code,
          constantly debugging life one line at a time.
        </p>
      </div>
    </div>
  );
}

export default Hom;
