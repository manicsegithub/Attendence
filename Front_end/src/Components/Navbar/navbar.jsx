function Navbar() {
  return (
    <>
      <div className="static">
        <nav className="navbar navbar-expand-sm bg-light text-dark fixed-top shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="container-fluid fw-bold">
            <a className="navbar-brand" href="#">
              Tuition Center
            </a>

            <ul className="nav justify-content-end fst-italic">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/Services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/Attendence_Standard"
                  aria-disabled=""
                >
                  Take Attendence
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  View Attendence
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
