import { useEffect } from "react";
import "./Skills.css";

function Skills() {
  useEffect(() => {
    // Similar to componentDidMount
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const goal = bar.getAttribute("data-transitiongoal");
      setTimeout(() => {
        bar.style.width = goal + "%";
        bar.textContent = goal + "%";
      }, 2000);
    });
  }, []);

  return (
    <div id="skill">
      <div className="container-s">
        <div className="skill-h1">
          <h2>My Skill</h2>
        </div>
        <div className="skill-image">
          <img src="\src\assets\python logo.png" alt="python" />
          <img src="\src\assets\numpy logo.png" alt="numpy" />
          <img src="\src\assets\react logo.png" alt="react" />
          <img src="\src\assets\html logo.png" alt="html" />
        </div>
      </div>
      <div className="row flex-column">
        <div className="col">
          <div className="skill">
            <h4>Python</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                data-transitiongoal="90"
              ></div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="skill">
            <h4>NumPy</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                data-transitiongoal="88"
              ></div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="skill">
            <h4>HTML/CSS</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                data-transitiongoal="85"
              ></div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="skill">
            <h4>React</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                data-transitiongoal="75"
              ></div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="skill">
            <h4>JavaScript</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                data-transitiongoal="65"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
