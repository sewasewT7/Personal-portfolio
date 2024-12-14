import "./About.css";
import { FaVolumeUp } from "react-icons/fa";
function About() {
  const pronounceName = () => {
    const utterance = new SpeechSynthesisUtterance("Sewasew");
    utterance.lang = "ar-EG";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
  };
  return (
    <>
      <div id="about">
        <div className="container">
          <h1 className="about-h1">About</h1>
          <div className="about-col-2">
            <img
              className="about-col-2-img"
              src="\src\assets\background.png"
              alt="User Image"
            />
          </div>
          <div className="about-col-1">
            <h1>
              Hey there! im <span>Sewasew</span>.
            </h1>
            <p>
              Since 2022 Ive been passionate about building seamless web
              experiences with React.
              <br />
              <br />I love solving complex coding challenges and creating
              visually engaging solutions. Lately, Ive been diving deep into
              machine learning, focusing on techniques like optimization and
              differentiation with JAX and NumPy.
              <br />
              <br /> I aim to combine my web development expertise with machine
              learning to craft intelligent, impactful projects.
            </p>
          </div>
        </div>
        <div className="App-container">
          {/* <div className="con">
                <div className="random_facts">
                  <div className="fun_fact-h1">
                    <h4>Random Facts</h4>
                  </div>
                  <div className="fun_fact-p">
                    <ul>
                      <li>Full-stack thinker, machine learning dreamer.</li>
                      <li>I love drinking a lot of tea.</li>
                      <li>I’m kinda into fashion and design.</li>
                      <li>I love travel, though I haven’t left my country.</li>
                      <li>
                        Im a dog person but <br></br>scared of them since a
                        childhood incident.
                      </li>
                      <li>I have Ataxophobia</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="con-1">
                  <div className="name-pro">
                    <div className="name-pro-1">
                      <h4>Sewasew</h4>
                    </div>
                    <div className="name-pro-p">
                      <p>
                        My name, Sewasew, is <br /> Pronounced Se-wasew <br />
                        click the robot to listen{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="expreience">
                <h4>Exprience</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                  cumque hic! Similique voluptatum minima provident tenetur dolore
                  vitae, quas perferendis necessitatibus itaque quaerat consectetur
                  consequuntur voluptate rerum maxime odio expedita!
                </p>
              </div>
            </div>
            <div className="con-2">
              <div className="height">
                <p>im 1.65m tall</p>
              </div>
            </div>
            <div className="my-story">
              <h4>My Story</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit
                ipsum nisi nemo tenetur iusto? Molestiae, velit. Fugit sapiente ut,
                cupiditate velit suscipit quidem veritatis atque ratione mollitia
                quo est!
              </p>
            </div> */}
          <div className="row">
            <div className="card fun-fact">
              <h4>Fun Fact</h4>
              <ul>
                <li>Full-stack thinker, machine learning dreamer.</li>
                <li>I love drinking a lot of tea.</li>
                <li>I’m kinda into fashion and design.</li>
                <li>I love travel, though I haven’t left my country.</li>
                <li>
                  Im a dog person but <br></br>scared of them since a childhood
                  incident.
                </li>
                <li>I have Ataxophobia</li>
              </ul>
            </div>
            <div className="colunm">
              <div className=" pronunciation">
                <div className="phonetic">[sɛː.wə.sɛw]</div>
                <p>
                  {" "}
                  My name is <span className="highlight">Sewasew</span>,
                  pronounced :{">"} <br />
                  <span className="phonetic">sɛː-wə-sɛw </span>
                  <button onClick={pronounceName}>
                    <FaVolumeUp />
                  </button>
                </p>
              </div>
              <div className="height">
                <p>
                  Call me <span>LUNA</span>
                </p>
                <p>I’m 165 cm tall. </p>
              </div>
            </div>
            <div className="card keyboard">
              <div className="keyboard-keys">
                <h4>Exprience</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, cumque hic! Similique voluptatum minima provident
                  tenetur dolore vitae, quas perferendis necessitatibus itaque
                  quaerat consectetur consequuntur voluptate rerum maxime odio
                  expedita!
                </p>
              </div>
              <p>Play with these keys to see something fun!</p>
            </div>
          </div>
          <div className="row">
            <div className="card my-story">
              <h4>My Story</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                odit ipsum nisi nemo tenetur iusto? Molestiae, velit. Fugit
                sapiente ut, cupiditate velit suscipit quidem veritatis atque
                ratione mollitia quo est!
              </p>
            </div>
            <div className="card my-bg">
              <h4>My Background</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                inventore non unde consequatur nobis minus sapiente aut corporis
                qui aliquam repudiandae molestias sequi temporibus, officia a
                officiis amet assumenda nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
