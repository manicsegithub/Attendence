import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Delete_student() {
  //get the items from database
  const [student1, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  //handle delete
  const handleDelete = async (studentid) => {
    try {
      await axios.delete("http://localhost:3000/Delete_student/" + studentid);
      window.location.reload();
      alert("Delete");
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

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
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(data.studentid)}
                  >
                    {" "}
                    Delete{" "}
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

export default Delete_student;
