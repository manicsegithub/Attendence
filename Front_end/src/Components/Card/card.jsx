import React from "react";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card shadow p-3 mb-5 bg-body-tertiary rounded"
        style={{
          marginTop: "15%",
          marginLeft: "auto",
          marginRight: "auto",
          width: "30%",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Attendence</h5>
          <p className="card-text">
            Enter the roll number of students and keep a record of students
            present in the school today.
          </p>
          <a href="/Attendence_Standard" className="btn btn-primary">
            Countinue
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
