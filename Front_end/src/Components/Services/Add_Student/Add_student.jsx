import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add_student() {
  const [name, setName] = useState();
  const [rollNumber, setRollNumber] = useState();
  const [standard, setStandard] = useState();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/Add_student", {
        name,
        rollNumber,
        standard,
      })
      .then((res) => {
        console.log(res);
        alert("Inserted");
        navigate("/");
      })
      .catch((err) => {
        return console.log(err);
      });
  }

  return (
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
    </form>
  );
}

export default Add_student;

//////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";

// function Add_student() {
//   return (
//     <>
//       <h1
//         style={{
//           textAlign: "center",
//           marginTop: "7%",
//           fontFamily: "serif",
//           fontStyle: "Bold",
//         }}
//       >
//         Insert the Student Details{" "}
//       </h1>

//       <div
//         className="form-floating"
//         style={{ width: "70%", marginLeft: "10%", marginTop: "2%" }}
//       >
//         <textarea
//           className="form-control"
//           placeholder="Leave a comment here"
//           id="floatingTextarea"
//         ></textarea>
//         <label for="floatingTextarea">Name</label>
//       </div>

//       <div
//         className="form-floating"
//         style={{ width: "70%", marginLeft: "10%", marginTop: "2%" }}
//       >
//         <textarea
//           className="form-control"
//           placeholder="Leave a comment here"
//           id="floatingTextarea"
//         ></textarea>
//         <label for="floatingTextarea">Roll Number</label>
//       </div>

//       <div
//         className="form-floating"
//         style={{ width: "70%", marginLeft: "10%", marginTop: "2%" }}
//       >
//         <textarea
//           className="form-control"
//           placeholder="Leave a comment here"
//           id="floatingTextarea"
//         ></textarea>
//         <label for="floatingTextarea">Standard</label>
//       </div>

//       <button
//         type="button"
//         class="btn btn-info"
//         style={{ marginLeft: "10%", marginTop: "2%" }}
//       >
//         Submit
//       </button>
//     </>
//   );
// }

// export default Add_student;

//////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";

// const FormComponent = () => {
//   const [name, setName] = useState("");
//   const [rollNumber, setRollNumber] = useState("");
//   const [standard, setStandard] = useState("");

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       name: name,
//       rollNumber: rollNumber,
//       standard: standard,
//     };

//     try {
//       const response = await fetch("api/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Data submitted successfully!");
//       } else {
//         alert("Error submitting data.");
//       }
//     } catch (error) {
//       console.error("Error:", error);

//       alert("Error submitting data.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div
//         className="form-floating"
//         style={{ width: "70%", marginLeft: "10%", marginTop: "15%" }}
//       >
//         <textarea
//           className="form-control"
//           placeholder="Leave a comment here"
//           id="floatingTextarea"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         ></textarea>
//         <label htmlFor="floatingTextarea">Name</label>
//       </div>

//       <div
//         className="form-floating"
//         style={{ width: "70%", marginLeft: "10%", marginTop: "2%" }}
//       >
//         <textarea
//           className="form-control"
//           placeholder="Leave a comment here"
//           id="floatingTextarea"
//           value={rollNumber}
//           onChange={(e) => setRollNumber(e.target.value)}
//         ></textarea>
//         <label htmlFor="floatingTextarea">Roll Number</label>
//       </div>

//       <div
//         className="form-floating"
//         style={{ width: "70%", marginLeft: "10%", marginTop: "2%" }}
//       >
//         <textarea
//           className="form-control"
//           placeholder="Leave a comment here"
//           id="floatingTextarea"
//           value={standard}
//           onChange={(e) => setStandard(e.target.value)}
//         ></textarea>
//         <label htmlFor="floatingTextarea">Standard</label>
//       </div>

//       <button
//         type="submit"
//         className="btn btn-info"
//         style={{ marginLeft: "10%", marginTop: "2%" }}
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default FormComponent;
