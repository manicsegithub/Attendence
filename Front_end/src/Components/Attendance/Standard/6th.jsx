// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Sixth() {
//   //get the items from database
//   const [student1, setStudent] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/")
//       .then((res) => setStudent(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   //handle delete
//   const handleDelete = async (studentid) => {
//     try {
//       await axios.delete("http://localhost:3000/Delete_student/" + studentid);
//       window.location.reload();
//       alert("Delete");
//     } catch (err) {
//       console.log(err);
//       alert("Error");
//     }
//   };

//   //Fetch Specific Student Data
//   const fetchStudentById = (standard) => {
//     fetch(`http://localhost:3000/6th/${standard}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data); // Handle the specific student data here
//       })
//       .catch((error) => console.error("Error fetching student:", error));
//   };

//   return (
//     <div className="d-flex vh-100 by-primary justify-content-center align-items-center">
//       <div className="w-50 bg-white rounded">
//         {/* link use to connect and add new data, create fn name  */}

//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Rollnumber</th>
//               <th>Standard</th>
//               <th>Present</th>
//               <th>Absent</th>
//             </tr>
//           </thead>
//           <tbody>
//             {student1.map((data, i) => (
//               <tr key={i}>
//                 <td>{data.name}</td>
//                 <td>{data.rollNumber}</td>
//                 <td>{data.standard}</td>

//                 <td>
//                   <button
//                     className="btn btn-danger ms-2"
//                     onClick={() => handleDelete(data.studentid)}
//                   >
//                     {" "}
//                     Present{" "}
//                   </button>
//                 </td>

//                 <td>
//                   <button
//                     className="btn btn-danger ms-2"
//                     onClick={() => handleDelete(data.studentid)}
//                   >
//                     {" "}
//                     Absent{" "}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Sixth;

////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Sixth() {
//   // Initialize the state to hold the student data
//   const [student1, setStudent] = useState([]);
//   const [loading, setLoading] = useState(true); // For loading state
//   const [error, setError] = useState(""); // For handling errors

//   // Fetch all student data from the backend
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/") // Get student data
//       .then((res) => {
//         setStudent(res.data); // Store the data in state
//         setLoading(false); // Set loading to false once data is fetched
//       })
//       .catch((err) => {
//         console.log(err);
//         setError("Failed to load student data"); // Set error message if request fails
//         setLoading(false);
//       });
//   }, []);

//   // Handle the delete functionality (Remove student)
//   const handleDelete = async (studentid) => {
//     try {
//       await axios.delete(`http://localhost:3000/Delete_student/${studentid}`);
//       setStudent(student1.filter((student) => student.studentid !== studentid)); // Update the UI to reflect the deletion
//       alert("Student deleted");
//     } catch (err) {
//       console.log(err);
//       alert("Error deleting student");
//     }
//   };

//   // Fetch student data by standard (e.g., for 6th grade students)
//   const fetchStudentById = (standard) => {
//     fetch(`http://localhost:3000/6th/${standard}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data); // Handle the specific student data here
//       })
//       .catch((error) => console.error("Error fetching student:", error));
//   };

//   // Loading state and error handling
//   if (loading) {
//     return <div>Loading data...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="d-flex vh-100 by-primary justify-content-center align-items-center">
//       <div className="w-50 bg-white rounded">
//         {/* Link to add new data */}
//         <Link to="/addStudent" className="btn btn-primary mb-3">
//           Add Student
//         </Link>

//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Roll Number</th>
//               <th>Standard</th>
//               <th>Present</th>
//               <th>Absent</th>
//             </tr>
//           </thead>
//           <tbody>
//             {student1.map((data, i) => (
//               <tr key={i}>
//                 <td>{data.name}</td>
//                 <td>{data.rollNumber}</td>
//                 <td>{data.standard}</td>

//                 <td>
//                   <button
//                     className="btn btn-success ms-2"
//                     onClick={() => fetchStudentById(data.standard)} // Use fetchStudentById for fetching students by standard
//                   >
//                     Present
//                   </button>
//                 </td>

//                 <td>
//                   <button
//                     className="btn btn-danger ms-2"
//                     onClick={() => handleDelete(data.studentid)} // Delete student
//                   >
//                     Absent
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Sixth;

/////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Sixth() {
  const [student1, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/sixth") // Change to /6th endpoint
      .then((res) => {
        setStudent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load student data");
        setLoading(false);
      });
  }, []);

  // const handleDelete = async (studentid) => {
  //   try {
  //     await axios.delete(`http://localhost:3000/Delete_student/${studentid}`);
  //     setStudent(student1.filter((student) => student.studentid !== studentid));
  //     alert("Student deleted");
  //   } catch (err) {
  //     console.log(err);
  //     alert("Error deleting student");
  //   }
  // };

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="d-flex vh-100 by-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Standard</th>
              <th>Present</th>
              <th>Absent</th>
            </tr>
          </thead>
          <tbody>
            {student1.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.rollNumber}</td>
                <td>{data.standard}</td>

                <td>
                  <button
                    className="btn btn-success ms-2"
                    onClick={() =>
                      alert(`Student ${data.name} is marked present`)
                    }
                  >
                    Present
                  </button>
                </td>

                <td>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() =>
                      alert(`Student ${data.name} is marked absent`)
                    }
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sixth;
