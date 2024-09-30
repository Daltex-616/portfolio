import React from "react";
import Navbarlitterl from "../../navbar/Navbarlitterl";
import "../../public/profile.css";

import imgproject from "../../assets/project_1.png";

const UniDep = () => {
  return (
    <>
      <Navbarlitterl />
      <main className="profile">
        <h1 className="profile__title">UniDep</h1>
        <div className="profile__wrapper">
          <div className="profile__img-container">
            <img className="profile__img" src={imgproject} alt="" />
          </div>
          <div className="profile__data-container">
            <div className="profile__data">
              <div className="profile__description">
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
                <div className="porfile__icon">
                  <a
                    href="https://www.linkedin.com/in/federiconzamora-/"
                    target="_blank"
                  ></a>
                  <a href="https://github.com/Daltex-616" target="_blank"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UniDep;
