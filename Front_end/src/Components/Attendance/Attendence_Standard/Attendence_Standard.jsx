import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Attendence_Standard() {
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
        <div className="col-sm-3 col-md-3">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body">
              <h5 className="card-title">Hello Guys</h5>
              {/* <p className="card-text">Welcome the new Student</p> */}
              <Link to="/6th" className="btn btn-primary">
                6
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-3">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body">
              <h5 className="card-title">Hello Guys</h5>
              {/* <p className="card-text">About the Student</p> */}
              <Link to="/Take_Attendence" className="btn btn-primary">
                7
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-3">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body">
              <h5 className="card-title">Hello Guys</h5>
              {/* <p className="card-text">Have a Nice Journey</p> */}
              <Link to="/Take_Attendence" className="btn btn-primary">
                8
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-3">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body">
              <h5 className="card-title">Hello Guys</h5>
              {/* <p className="card-text">About the Student</p> */}
              <Link to="/Take_Attendence" className="btn btn-primary">
                9
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-3">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body">
              <h5 className="card-title">Hello Guys</h5>
              {/* <p className="card-text">About the Student</p> */}
              <Link to="/Take_Attendence" className="btn btn-primary">
                10
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-3">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body">
              <h5 className="card-title">Hello Guys</h5>
              {/* <p className="card-text">About the Student</p> */}
              <Link to="/Take_Attendence" className="btn btn-primary">
                11
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-3">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body">
              <h5 className="card-title">Hello Guys</h5>
              {/* <p className="card-text">About the Student</p> */}
              <Link to="/Take_Attendence" className="btn btn-primary">
                12
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attendence_Standard;
