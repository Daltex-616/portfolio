import React from "react";
import Navbarlitterl from "../../navbar/Navbarlitterl";
import "../portfolio/portafolio.css";
import imgproject from "../../assets/project_2.png";
import { Footer } from "../../pages/Footer";
import { NavLink } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

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
                  Como programador junior Full Stack, poseo habilidades en el
                  desarrollo tanto del frontend como del backend, permitiéndome
                  abordar proyectos desde una perspectiva integral. Aunque estoy
                  en el inicio de mi carrera, tengo una sólida base en lenguajes
                  como JavaScript, HTML, CSS, y he trabajado con frameworks
                  populares como React para el frontend y Node.js para el
                  backend. Estoy comprometido con el aprendizaje continuo, la
                  mejora de mis habilidades y la colaboración en equipo para
                  entregar soluciones de software eficientes y bien
                  estructuradas.
                </p>
                <ul>
                  <li>tecnologias</li>
                </ul>
                <div className="porfile-page__icon">
                  <NavLink to="/">
                    <FaArrowAltCircleLeft className="profile__icon-icon" />
                    <span className="portafolio-page__span">Volver</span>
                  </NavLink>
                  <NavLink to="https://digimonquiz.onrender.com/" target="_blanck">
                    <FaArrowAltCircleRight className="profile-page__icon-icon" />
                    <span className="portafolio-page__span">
                      Ir al proyecto
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

export default DigimonQuiz;
