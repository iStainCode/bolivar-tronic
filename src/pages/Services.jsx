import React from 'react'
import { Link } from "react-router-dom";
import { services } from '../assets/services.js'
import imgTop from "../assets/img/breadcrumbs-bg.jpg";

const Services = () => {
  return (
    <div>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <h1>Bolivar Tronic<span>.</span></h1>
          </a>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to='/' >
                  Inicio
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  Nosotros
                </Link>
                
              </li>
              <li>
                <Link to='/services' className="active">
                  Servivios
                </Link>
              </li>
              <li>
                <Link to='/proyects'>
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to='/contact'>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">

        <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: `url(${imgTop})` }}  >
          <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
            <h2>Servicios</h2>
            <ol>
              <li><a href="index.html">Inicio</a></li>
              <li>Servicios</li>
            </ol>
          </div>
        </div>

        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              {console.log(services)}
              {services.servicios.map((service) =>(
                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="service-item  position-relative">
                  <div class="icon">
                    <i class="fa-solid fa-handshake"></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </div>
              </div>
              ))}

            </div>
          </div>
        </section>

        {/* <section id="services-cards" className="services-cards">
          <div className="container" data-aos="fade-up">

            <div className="row gy-4">

              

            </div>

          </div>
        </section> */}

        {/* <section id="alt-services-2" className="alt-services section-bg">
          <div className="container" data-aos="fade-up">

            <div className="row justify-content-around gy-4">
              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Non quasi officia eum nobis et rerum epudiandae rem voluptatem</h3>
                <p>Maxime quia dolorum alias perspiciatis. Earum voluptatem sint at non. Ducimus maxime minima iste magni
                  sit praesentium assumenda minus. Amet rerum saepe tempora vero.</p>

                

              </div>

              <div className="col-lg-6 img-bg" style={{ backgroundImage: "url(assets/img/alt-services-2.jpg)" }} data-aos="zoom-in" data-aos-delay="100"></div>
            </div>

          </div>
        </section> */}

        {/* <section id="alt-services" className="alt-services">
          <div className="container" data-aos="fade-up">

            <div className="row justify-content-around gy-4">
              <div className="col-lg-6 img-bg" style={{ backgroundImage: "url(assets/img/alt-services.jpg)" }} data-aos="zoom-in" data-aos-delay="100"></div>

              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus
                  laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

                

              </div>
            </div>

          </div>
        </section> */}
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
                    Residencial Intihuatana, Santa Anita<br /><br />
                    <strong>Phone:</strong> 989248155 / 981255944<br />
                    <strong>Email:</strong> bolivartronic@gmail.com<br />
                  </p>
                  <div className="social-links d-flex mt-3">
                    <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></a>
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
              &copy; Copyright <strong><span>Bolivar Tronic</span></strong>. todos los derechos reservados
            </div>
            <div className="credits">
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Services