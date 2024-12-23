import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Service() {
  // const [student, setstudent] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/")
  //     .then((res) => setstudent(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <>
      <div
        className="row"
        style={{ marginTop: "15%", marginLeft: "1%", marginRight: "1%" }}
      >
        <div className="col-sm-6 col-md-4">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body">
              <h5 className="card-title">Add Student</h5>
              <p className="card-text">Welcome the new Student</p>
              <Link to="/Add_student" className="btn btn-primary">
                Continue
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body">
              <h5 className="card-title">Update</h5>
              <p className="card-text">About the Student</p>
              <Link to="/Update_student" className="btn btn-primary">
                Continue
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body">
              <h5 className="card-title">Delete Student</h5>
              <p className="card-text">Have a Nice Journey</p>
              <Link to="/Delete_student" className="btn btn-primary">
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
