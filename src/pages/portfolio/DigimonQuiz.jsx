import React from "react";
import Navbarlitterl from "../../navbar/Navbarlitterl";
import "../portfolio/portafolio.css";
import imgproject from "../../assets/project_2.png";
import { Footer } from "../../pages/Footer";
import { NavLink } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight, FaGithub } from "react-icons/fa";

const DigimonQuiz = () => {
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
                  DigimonQuiz es una demostración interactiva diseñada para
                  mostrar cómo se puede gestionar el estado global de una
                  aplicación utilizando Sunstad. En esta demo, los usuarios
                  pueden participar en un quiz temático de Digimon, mientras que
                  Sunstad se encarga de mantener y sincronizar el estado global
                  de la aplicación, como las respuestas seleccionadas, el
                  progreso del usuario, y los puntajes. La implementación de
                  Sunstad permite un manejo eficiente del estado compartido
                  entre distintos componentes, asegurando una experiencia de
                  usuario fluida y sin problemas de actualización o
                  sincronización. DigimonQuiz sirve como una excelente
                  demostración de cómo integrar herramientas de gestión de
                  estado en aplicaciones web interactivas.
                </p>
                <h3>Tecnologias utilizadas</h3>
                <ul>
                  <li>Javascrip</li>
                  <li>React</li>
                  <li>Typescrip</li>
                  <li>Sunstand</li>
                </ul>
                <div className="porfile-page__icon">
                  <NavLink to="/">
                    <FaArrowAltCircleLeft className="profile__icon-icon" />
                    <span className="portafolio-page__span">Volver</span>
                  </NavLink>
                  <NavLink
                    to="https://github.com/Daltex-616/DigimonQuiz"
                    target="_blanck"
                  >
                    <FaGithub className="profile__icon-icon" />
                  </NavLink>
                  <NavLink
                    to="https://digimonquiz.onrender.com/"
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

export default DigimonQuiz;
