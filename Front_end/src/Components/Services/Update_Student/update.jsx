import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent() {
  const [name, setName] = useState();
  const [rollNumber, setRollNumber] = useState();
  const [standard, setStandard] = useState();
  const { studentid } = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:3000/update/" + studentid, {
        name,
        rollNumber,
        standard,
      })
      .then((res) => {
        console.log(res);
        alert("Updated");
        navigate("/");
      })
      .catch((err) => {
        return console.log(err);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="form-floating"
          style={{ width: "70%", marginLeft: "10%", marginTop: "15%" }}
        >
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={(e) => setName(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea">Name</label>
        </div>

        <div
          className="form-floating"
          style={{ width: "70%", marginLeft: "10%", marginTop: "2%" }}
        >
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={(e) => setRollNumber(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea">Roll Number</label>
        </div>

        <div
          className="form-floating"
          style={{ width: "70%", marginLeft: "10%", marginTop: "2%" }}
        >
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={(e) => setStandard(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea">Standard</label>
        </div>

        <button
          type="submit"
          className="btn btn-info"
          style={{ marginLeft: "10%", marginTop: "2%" }}
        >
          Submit
        </button>
      </form>{" "}
    </>
  );
}

export default UpdateStudent;
