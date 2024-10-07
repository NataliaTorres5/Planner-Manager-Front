import React from "react";
import "../styles/FakeProyectPage.css";
import { Link } from "react-router-dom";

function FakeProyectPage() {
  return (
    <>
      <div className="shadow p-3 mb-5 bg-white rounded proyect-tab">
        <div className="proyects-text">
          <div className="fproyect-intro">
            <h3 className="text-proyects">
              Organize Your Life, One Day at a Time
            </h3>
          </div>
          <div className="content-p" >
            <p className="text-introp" >
              Organize Your Life, One Day at a Time. Subheadline: Introducing
              [App Name], Your Personal Productivity Companion. Body: Are you
              overwhelmed by a never-ending to-do list? Struggling to keep track
              of appointments, deadlines, and tasks? <strong>Planner</strong>  is here to help
              you regain control and achieve your goals.
            </p>
          </div>
          <p>
             Do you want  your proyect </p>
          <Link className="linkHero" to="/register">
            Register
          </Link>
        </div>
      </div>
    </>
  );
}

export default FakeProyectPage;
