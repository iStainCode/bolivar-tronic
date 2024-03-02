import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import imgTop from "../assets/img/breadcrumbs-bg.jpg";

import imgAbout from "../assets/img/about.jpg";

const About = () => {
  const [happyClients, setHappyClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [supportCalls, setSupportCalls] = useState(0);
  const [workers, setWorkers] = useState(0);

  useEffect(() => {
    const happyClientsInterval = setInterval(() => {
      if (happyClients < 232) {
        setHappyClients((prevCount) => prevCount + 1);
      }
    }, 10);

    const projectsInterval = setInterval(() => {
      // Ajusta el límite según sea necesario
      if (projects < 521) {
        setProjects((prevCount) => prevCount + 2);
      }
    }, 10);

    const supportCallsInterval = setInterval(() => {
      // Ajusta el límite según sea necesario
      if (supportCalls < 1463) {
        setSupportCalls((prevCount) => prevCount + 5);
      }
    }, 10);

    const workersInterval = setInterval(() => {
      // Ajusta el límite según sea necesario
      if (workers < 15) {
        setWorkers((prevCount) => prevCount + 1);
      }
    }, 10);

    // Limpia los intervalos al desmontar el componente
    return () => {
      clearInterval(happyClientsInterval);
      clearInterval(projectsInterval);
      clearInterval(supportCallsInterval);
      clearInterval(workersInterval);
    };
  }, [happyClients, projects, supportCalls, workers]);

  return (
    <div>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <h1>
              Tropic Tronic<span>.</span>
            </h1>
          </a>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/about" className="active">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/services">Servivios</Link>
              </li>
              <li>
                <Link to="/proyects">Proyectos</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <div
          className="breadcrumbs d-flex align-items-center"
          style={{ backgroundImage: `url(${imgTop})` }}
        >
          <div
            className="container position-relative d-flex flex-column align-items-center"
            data-aos="fade"
          >
            <h2>Nosotros</h2>
            <ol>
              <li>
                <a href="index.html">Inicio</a>
              </li>
              <li>Nosotros</li>
            </ol>
          </div>
        </div>

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row position-relative">
              <div
                className="col-lg-7 about-img"
                style={{ backgroundImage: `url(${imgAbout})` }}
              ></div>

              <div className="col-lg-7">
                <h2>QUIENES SOMOS</h2>
                <div className="our-story">
                  <h4>Fundada en 2006</h4>
                  <h3>Nuestra historia</h3>
                  <p>
                    Bolivar Tronic es una empresa independiente fundada en el
                    año 2006, con más de 16 años de experiencia en desarrollo de
                    proyectos, venta y servicio. Brindamos soluciones
                    integrales, oportunas y competitivas, atendemos la necesidad
                    de nuestros clientes a través de la calidad y garantía de
                    nuestros productos y servicios, además de contar con un
                    equipo profesional con amplia experiencia y eficiencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stats-counter" className="stats-counter section-bg">
          <div className="container">
            <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
        <div className="stats-item d-flex align-items-center w-100 h-100">
          <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
          <div>
            <span className="purecounter">{happyClients}</span>
            <p>Clientes felices</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="stats-item d-flex align-items-center w-100 h-100">
          <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
          <div>
            <span className="purecounter">{projects}</span>
            <p>Proyectos</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="stats-item d-flex align-items-center w-100 h-100">
          <i className="bi bi-headset color-green flex-shrink-0"></i>
          <div>
            <span className="purecounter">{supportCalls}</span>
            <p>Llamadas de soporte</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="stats-item d-flex align-items-center w-100 h-100">
          <i className="bi bi-people color-pink flex-shrink-0"></i>
          <div>
            <span className="purecounter">{workers}</span>
            <p>Trabajadores</p>
          </div>
        </div>
      </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="footer-content position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3>Bolivar Tronic</h3>
                  <p>
                    Mz D1 Lote 7 Asoc. de Viv.
                    <br />
                    Residencial Intihuatana, Santa Anita
                    <br />
                    <br />
                    <strong>Teléfono:</strong> 989248155 / 981255944
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
              &copy; Copyright{" "}
              <strong>
                <span>Bolivar Tronic</span>
              </strong>
              . Todos los derechos reservados
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default About;
