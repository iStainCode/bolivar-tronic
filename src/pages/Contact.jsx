import React from "react";
import { Link } from "react-router-dom";
import imgTop from "../assets/img/breadcrumbs-bg.jpg";

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1>
              Bolivar Tronic<span>.</span>
            </h1>
          </a>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="index.html">Inicio</a>
              </li>
              <li>
                <a href="about.html">Nosotros</a>
              </li>
              <li>
                <a href="services.html">Servicios</a>
              </li>
              <li>
                <a href="projects.html">Proyectos</a>
              </li>
              <li>
                <a href="contact.html" className="active">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main">
        {/* Breadcrumbs */}
        <div
          className="breadcrumbs d-flex align-items-center"
          style={{ backgroundImage: `url(${imgTop})` }}
        >
          <div
            className="container position-relative d-flex flex-column align-items-center"
            data-aos="fade"
          >
            <h2>Contacto</h2>
            <ol>
              <li>
                <a href="index.html">Inicio</a>
              </li>
              <li>Contacto</li>
            </ol>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-map"></i>
                  <h3>Nuestra Dirección</h3>
                  <p>
                    Mz D1 Lote 7 Asoc. de Viv. Residencial Intihuatana, Santa
                    Anita
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-envelope"></i>
                  <h3>Email</h3>
                  <p>bolivartronic@gmail.com</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-telephone"></i>
                  <h3>Teléfono</h3>
                  <p>989248155 / 981255944</p>
                </div>
              </div>
            </div>

            <div className="row gy-4 mt-1">
              <div className="col-lg-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.88313333306903!2d-76.96020880477474!3d-12.034560931470113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c507264bfcd3%3A0x743919bda1cad7f8!2sBOLIVAR%20TRONIC%20SAC!5e0!3m2!1ses!2spe!4v1694648131616!5m2!1ses!2spe"
                  width="600"
                  height="384"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row gy-4">
                    <div className="col-lg-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Tu Nombre"
                        required
                      />
                    </div>
                    <div className="col-lg-6 form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Tu Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Asunto"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Mensaje"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Cargando</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Tu mensaje ha sido enviado. ¡Gracias!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Enviar Mensaje</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="footer-content position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3>Bolivar Tronic</h3>
                  <p>
                    Mz D1 Lote 7 Asoc. de Viv. <br />
                    Residencial Intihuatana, Santa Anita
                    <br />
                    <br />
                    <strong>Phone:</strong> 989248155 / 981255944
                    <br />
                    <strong>Email:</strong> bolivartronic@gmail.com
                    <br />
                  </p>
                  <div className="social-links d-flex mt-3">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Links</h4>
                <ul>
                  <li>
                    <Link to='/'>Inicio</Link>
                  </li>
                  <li>
                    <Link to='/about'>Nosotros</Link>
                  </li>
                  <li>
                    <Link to='/services'>servicios</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contacto</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal text-center position-relative">
          <div className="container">
            <div className="copyright">
              &copy; Derechos de autor{" "}
              <strong>
                <span>Bolivar Tronic</span>
              </strong>
              . Todos los derechos reservados
            </div>
            <div className="credits"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
