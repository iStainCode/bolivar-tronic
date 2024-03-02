import React from "react";
import { Link } from "react-router-dom";

import imgCarrusel2 from '../assets/img/hero-carousel/hero-carousel-2.jpg'
import imgCarrusel3 from '../assets/img/hero-carousel/hero-carousel-3.jpg'
import imgCarrusel4 from '../assets/img/hero-carousel/hero-carousel-4.jpg'
import imgCarrusel5 from '../assets/img/hero-carousel/hero-carousel-5.jpg'

import featuresImage1 from '../assets/img/hero-carousel/features-1.jpg';
import featuresImage2 from '../assets/img/hero-carousel/features-2.jpg';

const Home = () => {
  return (
    <>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <h1>
              Bolivar Tronic<span>.</span>
            </h1>
          </a>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to='/' className="active">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  Nosotros
                </Link>
                
              </li>
              <li>
                <Link to='/services'>
                  Servivios
                </Link>
              </li>
              <li>
                <Link to='/proyects'>
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to='contact'>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 data-aos="fade-down">
                  Bienvenido a <span>Bolivar Tronic</span>
                </h2>
                <p data-aos="fade-up">
                  Más de 16 años brindando soluciones integrales en losrubros de
                  mineria, transporte, textil, pesquero y plantas industriales.
                </p>
                <a
                  data-aos="fade-up"
                  data-aos-delay="200"
                  href="https://api.whatsapp.com/send?phone=51989248155&text=Hola, quiero contatarlos."
                  className="btn-get-started"
                >
                  Contratar
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          id="hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          {/* <div
            className="carousel-item active"
            style={{
              backgroundImage: `url(${imgCarrusel2})`,
            }}
          ></div> */}
          <div
            className="carousel-item active"
            style={{
              backgroundImage: `url(${imgCarrusel3})`,
            }}
          ></div>
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${imgCarrusel4})`,
            }}
          ></div>
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${imgCarrusel5})`,
            }}
          ></div>

          <a
            className="carousel-control-prev"
            href="#hero-carousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            className="carousel-control-next"
            href="#hero-carousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>

      <main id="main">
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Servicios</h2>
            </div>

            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <h3>Armado de tableros electricos y electronicos</h3>
                  <p>
                    Brindamos un servicio altamente especializado: el montaje de
                    tableros eléctricos y electrónicos. Nuestro enfoque
                    garantiza un rendimiento óptimo al tiempo que prioriza la
                    seguridad en todas las interconexiones.
                  </p>
                  <br />
                  <Link
                    className="btn color-primary"
                    href="services.html"
                    role="button"
                    to='/services'
                  >
                    Leer más
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <h3>
                    Fabricacion y armado de manos electronicas para maquinaria
                    pesada
                  </h3>
                  <p>
                    Creación y ensamblaje de manos electrónicas de alta
                    precisión para maquinaria pesada. Potenciamos el control y
                    la eficiencia en operaciones industriales exigentes.
                  </p>
                  <br />
                  <Link
                    className="btn color-primary"
                    href="services.html"
                    role="button"
                    to='/services'
                  >
                    Leer más
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <h3>Reparacion de grupós electrogenos</h3>
                  <p>
                    Especialistas en reparación de grupos electrógenos.
                    Restauramos su funcionamiento con eficiencia y
                    confiabilidad.
                  </p>
                  <br />
                  <Link
                    className="btn color-primary"
                    href="services.html"
                    role="button"
                    to='/services'
                  >
                    Leer más
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <h3>Rebobinado de motores monofasicos y trifasicos</h3>
                  <p>
                    Expertos en rebobinado de motores monofásicos y trifásicos.
                    Restauramos su rendimiento con precisión y eficiencia.
                  </p>
                  <br />
                  <Link
                    className="btn color-primary"
                    href="services.html"
                    role="button"
                    to='/services'
                  >
                    Leer más
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <h3>Reparacion de arrancadores y alternadores</h3>
                  <p>
                    Profesionales en la reparación de arrancadores y
                    alternadores. Devolvemos su funcionalidad con destreza y
                    eficacia.
                  </p>
                  <br />
                  <Link
                    className="btn color-primary"
                    href="services.html"
                    role="button"
                    to='/services'
                  >
                    Leer más
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <h3>Desarrollo de proyectos industriales y electronicos</h3>
                  <p>
                    Desarrollo de proyectos industriales y electrónicos.
                    Transformamos ideas en soluciones con experiencia y pericia.
                  </p>
                  <br />
                  <Link
                    className="btn color-primary"
                    href="services.html"
                    role="button"
                    to='/services'
                  >
                    Leer más
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features section-bg">
      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs row g-2 d-flex">
          <li className="nav-item col-6">
            <a
              className="nav-link active show"
              data-bs-toggle="tab"
              data-bs-target="#tab-1"
            >
              <h4>Visión</h4>
            </a>
          </li>

          <li className="nav-item col-6">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#tab-2"
            >
              <h4>Misión</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div
                className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Nuestra Visión</h3>
                <p className="fst-italic">
                  Como una empresa de expresos en servicio industrial y diesel,
                  nuestra visión es destacar como líderes nacionales. Buscamos
                  lograrlo mediante la entrega constante de soluciones
                  innovadoras y competitivas que superen las expectativas de
                  nuestros clientes. Nos enorgullece nuestra cultura de
                  innovación y nuestra dedicación a la eficiencia. Nuestro
                  objetivo es ser un socio confiable que contribuya al éxito y
                  al desarrollo sostenible de las operaciones industriales en
                  todo el país.
                </p>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src={featuresImage1} // Utiliza la variable de imagen importada
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div
                className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Nuestra Misión</h3>
                <p className="fst-italic">
                  Nuestra misión como empresa de expresos en servicio industrial
                  y diesel es proporcionar soluciones rápidas, eficaces y de alta
                  calidad a nuestros clientes. Lo hacemos a través de un equipo
                  de profesionales altamente capacitados que trabajan
                  incansablemente para garantizar la satisfacción de nuestros
                  clientes. Estamos comprometidos en ofrecer un servicio que
                  supere las expectativas y responda de manera efectiva a las
                  necesidades de nuestros clientes en todo momento.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src={featuresImage2} // Utiliza la variable de imagen importada
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <section id="recent-blog-posts" className="recent-blog-posts" />
        <div className="container" data-aos="fade-up" />
      </main>

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
              &copy; Copyright{" "}
              <strong>
                <span>Bolivar Tronic</span>
              </strong>
              . todos los derechos reservados
            </div>
            <div className="credits"></div>
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* <div id="preloader"></div> */}
    </>
  );
};

export default Home;
