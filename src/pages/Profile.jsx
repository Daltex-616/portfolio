import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../public/profile.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import profileimg from "../assets/profileimg.jpg"

export const Profile = () => {
  return (
    <>
      <main className="profile">
        <div className="profile__wrapper">
          <div className="profile__img-container">
            <img
              className="profile__img"
              src={profileimg}
              alt=""
            />
          </div>
          <div className="profile__data-container">
            <div className="profile__data">
              <div className="profile__description">
                <h1 className="profile__title">Federico Zamora</h1>
                <Typewriter
                  words={[
                    "Web Developer",
                    "Sofware Developer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
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
                  <a href="https://www.linkedin.com/in/federiconzamora-/" target="_blank">
                    <FaLinkedinIn className="profile__icon-icon" />
                  </a>
                  <a href="https://github.com/Daltex-616" target="_blank">
                    <FaGithub className="profile__icon-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
