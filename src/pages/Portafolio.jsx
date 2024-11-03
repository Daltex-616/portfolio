import React from "react";
import "../public/portafolio.css";
import { NavLink } from "react-router-dom";
export const Portafolio = () => {
  return (
    <>
      <section className="portafolio">
        <h2 className="portafolio__title">Portafolio</h2>
        <div className="portafolio__project-container">
          <NavLink className="portafolio__project" to="/UniDep">
            <h2 className="portafolio__project-name">UniDep</h2>
          </NavLink>
          <NavLink className="portafolio__project" to="/DigimonQuiz">
            <h2 className="portafolio__project-name">Digimon Quiz</h2>
          </NavLink>
          <NavLink className="portafolio__project" to="/BackendProject">
            <h2 className="portafolio__project-name">Backend Project</h2>
          </NavLink>
         
          <a
            href="https://github.com/Daltex-616/minimarket-front"
            className="portafolio__project"
            target="_blank"
          >
            <h2 className="portafolio__project-name">MiniMarket</h2>
          </a>
          <a
            href="https://github.com/Daltex-616/backendmarket"
            target="_blakn"
            className="portafolio__project"
          >
            <h2 className="portafolio__project-name">Backend Minimarket</h2>
          </a>
          <a
            href="https://github.com/Daltex-616/Api-tareas"
            target="_blank"
            className="portafolio__project"
          >
            <h2 className="portafolio__project-name">Api Tareas</h2>
          </a>
        </div>
      </section>
    </>
  );
};
