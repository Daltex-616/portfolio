import React from "react";
import Navbarlitterl from "../../navbar/Navbarlitterl";
import "../portfolio/portafolio.css";
import imgproject from "../../assets/project_1.png";
import { Footer } from "../../pages/Footer";
import { NavLink } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight,FaGithub } from "react-icons/fa";

const UniDep = () => {
  return (
    <>
      <Navbarlitterl />
      <main className="profile-page">
        <h1 className="profile-page__title">UniDep</h1>
        <div className="profile-page__wrapper">
          <div className="profile-page__img-container">
            <img className="profile-page__img" src={imgproject} alt="" />
          </div>
          <div className="profile-page__data-container">
            <div className="profile-page__data">
              <div className="profile-page__description">
                <h2>Descripcion:</h2>
                <p>
                  Unidep es una plataforma web integral que proporciona
                  información completa sobre los deportes universitarios
                  disponibles en la provincia. A través de esta aplicación, los
                  usuarios pueden explorar una amplia variedad de disciplinas
                  deportivas, conocer los requisitos específicos para participar
                  en cada una, y obtener detalles actualizados sobre los
                  calendarios y eventos deportivos. Además, Unidep ofrece mapas
                  interactivos que facilitan la ubicación precisa de las
                  instalaciones deportivas, lo que permite a los estudiantes y
                  deportistas acceder de manera rápida y sencilla a los lugares
                  donde se llevan a cabo las actividades. La aplicación busca
                  promover la participación en el ámbito deportivo
                  universitario, fomentando un estilo de vida activo y saludable
                  entre los estudiantes.
                </p>
                <h3>Tecnologias utilizadas:</h3>
                <ul>
                  <li>JavaScriot</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Boostrap</li>
                </ul>
                <div className="porfile-page__icon">
                  <NavLink to="/">
                    <FaArrowAltCircleLeft className="profile__icon-icon" />
                    <span className="portafolio-page__span">Volver</span>
                  </NavLink>
                  <NavLink to="https://github.com/Daltex-616/UniDep-Pilar-Tecno" target="_blanck">
                    <FaGithub className="profile__icon-icon" />
                  </NavLink>
                  <NavLink to="https://unidep.onrender.com/" target="_blanck">
                    <FaArrowAltCircleRight className="profile-page__icon-icon" />
                    <span className="portafolio-page__span">
                      Proyecto
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UniDep;
