function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Crop Prediction
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Crop Name
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Rice
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Wheat
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Atta
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Gram
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tur
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Urad{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Moong
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Masur{" "}
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Groundnut
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mustard
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Vanaspati
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Soya
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sunflower
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Palm oil
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Potato
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Onion
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tomato
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Sugar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Gur
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Milk tea
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Salt
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  State
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  District
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Predict"
                aria-label="Predict"
              />
              <button className="btn btn-outline-success" type="submit">
                Predict
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* Banner Image */}
      <img
        src="/banner.jpg"
        alt="Banner"
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
}

export default App;
