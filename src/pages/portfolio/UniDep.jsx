import React from "react";
import Navbarlitterl from "../../navbar/Navbarlitterl";

const UniDep = () => {
  return (
    <>
      <Navbarlitterl />
      <main className="profile-page">
        <div className="profile-page__wrapper">
          <div className="profile-page__img-container">
            <img src="" alt="" />
          </div>
          <div className="profile-page__data-container">
            <h2 className="profile-page__title">UniDep</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              id commodi repudiandae quae cupiditate consequatur adipisci
              repellendus ut accusantium minus delectus ratione, provident
              aperiam impedit temporibus, alias, in dignissimos rerum.
            </p>
            <div className="profile-page__icon">
                <button className="profile-page__icon-icon">BACK</button>
                <button  className="profile-page__icon-icon">Ir al proyecto</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UniDep;
