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
          <NavLink className="portafolio__project" to="/backendproject">
            <h2 className="portafolio__project-name">Backend project</h2>
          </NavLink>
          <NavLink className="portafolio__project" to="/MiniMarket">
            <h2 className="portafolio__project-name">MiniMarket</h2>
          </NavLink>
          <NavLink className="portafolio__project" to="/backendminimarket">
            <h2 className="portafolio__project-name">Backend Minimarket</h2>
          </NavLink>
          <NavLink className="portafolio__project" to="/apitareas">
            <h2 className="portafolio__project-name">Api Tareas</h2>
          </NavLink>
        </div>
      </section>
    </>
  );
};
