import React from "react";
import Navbarlitterl from "../../navbar/Navbarlitterl";
import "../portfolio/portafolio.css";
import imgproject from "../../assets/project_2.png";
import { Footer } from "../../pages/Footer";
import { NavLink } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight, FaGithub } from "react-icons/fa";

const BackendProject = () => {
  return (
    <>
      <Navbarlitterl />
      <main className="profile-page">
        <h1 className="profile-page__title">DigimonQuiz</h1>
        <div className="profile-page__wrapper">
          <div className="profile-page__img-container">
            <img className="profile-page__img" src={imgproject} alt="" />
          </div>
          <div className="profile-page__data-container">
            <div className="profile-page__data">
              <div className="profile-page__description">
                <p>
                  Backend Project es una API interactiva que demuestra cómo
                  gestionar el estado global de una aplicación utilizando
                  Sunstad. En esta API, los desarrolladores pueden integrar
                  funcionalidades para crear un quiz temático de Digimon, en el
                  cual Sunstad se encarga de mantener y sincronizar el estado
                  global, como las respuestas de los usuarios, su progreso y los
                  puntajes. Sunstad asegura un manejo eficiente del estado
                  compartido entre diferentes endpoints, proporcionando una
                  experiencia de usuario consistente sin problemas de
                  actualización o sincronización. DigimonQuiz API sirve como una
                  demostración ideal de cómo utilizar herramientas de gestión de
                  estado en aplicaciones web interactivas y dinámicas.
                </p>
                <h3>Tecnologias utilizadas</h3>
                <ul>
                  <li>Javascrip</li>
                  <li>Typescrip</li>
                  <li>Mongo</li>
                </ul>
                <div className="porfile-page__icon">
                  <NavLink to="/">
                    <FaArrowAltCircleLeft className="profile__icon-icon" />
                    <span className="portafolio-page__span">Volver</span>
                  </NavLink>
                  <NavLink
                    to="https://github.com/Daltex-616/backend-pilar-tecno"
                    target="_blanck"
                  >
                    <FaGithub className="profile__icon-icon" />
                  </NavLink>
                  <NavLink
                    to="https://github.com/Daltex-616/backend-pilar-tecno/"
                    target="_blanck"
                  >
                    <FaArrowAltCircleRight className="profile-page__icon-icon" />
                    <span className="portafolio-page__span">Proyecto</span>
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

export default BackendProject;
