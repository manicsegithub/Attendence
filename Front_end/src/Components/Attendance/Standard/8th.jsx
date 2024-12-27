import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Eighth() {
  const [student1, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/eighth") // Change to /6th endpoint
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

  const handleDelete = async (studentid) => {
    try {
      await axios.delete(`http://localhost:3000/Delete_student/${studentid}`);
      setStudent(student1.filter((student) => student.studentid !== studentid));
      alert("Student deleted");
    } catch (err) {
      console.log(err);
      alert("Error deleting student");
    }
  };

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
                    onClick={() => handleDelete(data.studentid)}
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

export default Eighth;
