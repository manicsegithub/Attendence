import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Update_student() {
  //get the items from database
  const [student1, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  // //handle delete
  // const handleDelete = async (studentid) => {
  //   try {
  //     await axios.delete("http://localhost:3000/student1/" + studentid);
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="d-flex vh-100 by-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded">
        {/* link use to connect and add new data, create fn name  */}

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rollnumber</th>
              <th>Standard</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student1.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.rollNumber}</td>
                <td>{data.standard}</td>

                <td>
                  <Link
                    to={`update/${data.studentid}`}
                    className="btn btn-primary"
                  >
                    {" "}
                    Update{" "}
                  </Link>
                  {/* <button
                    className="btn btn-danger ms-2"
                    onClick={(e) => handleDelete(data.ID)}
                  >
                    {" "}
                    Delete{" "}
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Update_student;

/////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Update_student() {
//   const [name, setName] = useState();
//   const [rollNumber, setRollNumber] = useState();
//   const [standard, setStandard] = useState();
//   const navigate = useNavigate();

//   function handleSubmit(event) {
//     event.preventDefault();
//     axios
//       .post("http://localhost:3000/App_student", {
//         name,
//         rollNumber,
//         standard,
//       })
//       .then((res) => {
//         console.log(res);
//         navigate("/");
//       })
//       .catch((err) => console.log(err));
//   }

//   const [student, setStudent] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/")
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   }, []);

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
// }

// export default Update_student;
