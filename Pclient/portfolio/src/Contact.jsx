import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <div className="contact-h">
        <h2>
          Interested in collaborating with me?
          <i className="fa-solid fa-face-smile-beam"></i>
        </h2>
      </div>
      <div className="container213">
        <div className="row">
          <div className="contact-left">
            <p>
              <i className="fa-solid fa-paper-plane"></i>{" "}
              <a href="mailto:sewasewtadele@gmail.com">
                sewasewtadele@gmail.com
              </a>
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>+251-9664604
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Adama Ethiopia
            </p>
            <div className="social-media">
              <a href="https://www.instagram.com/luna_tadele?igsh=eW9tNzhzbmt4NTFt">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/sewasew-tadele-79a3222b5">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/sewasewT7">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form>
              {/* Name Field */}
              <div className="input-wrapper">
                <i className="fa-regular fa-user"></i>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="input-wrapper">
                <i className="fa-regular fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="input-wrapper">
                <i className="fa-regular fa-message"></i>
                <textarea
                  rows="6"
                  name="message"
                  className="form-control"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="btn-2" type="submit">
                Send <span className="glyphicon glyphicon-send"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
