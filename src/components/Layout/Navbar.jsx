import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../../Redux/AuthSlice";
import { toast } from "react-toastify";
import "./Navbar.css";

const Navbar = () => {
  const { LogoutToggle } = useSelector((state) => state?.auth);
  const name = localStorage.getItem("name");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout());
    navigate("/login");
    toast.success("Logout successfully");
  };

  return (
    <>
      <div>
        <header>
          <div className="header-top-bar">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <ul className="top-bar-info list-inline-item pl-0 mb-0">
                    <li className="list-inline-item">
                      <a href="mailto:support@gmail.com">
                        <i className="icofont-support-faq mr-2"></i>
                        support@doctor.com
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <i className="icofont-location-pin mr-2"></i>Address Sector V,
                      Kolkata, India{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                    <a href="tel:+23-345-67890">
                      <span>Call Now : </span>
                      <span className="h4">+70 016 00 532</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scrolling-text">
          IN CASE OF EMERGENCY - CALL{" "} <span style={{ color: "red" }}>9876543210 </span>&nbsp; DONT WAIT ! &nbsp;&nbsp; IN CASE OF EMERGENCY - CALL{" "} <span style={{ color: "red" }}>9876543210 </span>&nbsp; DONT WAIT ! &nbsp;&nbsp; 
    

          </div>
          <nav
            className="navbar navbar-expand-lg navigation"
            id="navbar"
            style={{ backgroundColor: "#e8efff" }}
          >
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img
                  src="/images/logo.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: "240px", height: "90px" }}
                />
              </Link>

              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarmain"
                aria-controls="navbarmain"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icofont-navigation-menu"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarmain">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item ">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/departments">
                      Department
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/doctors">
                      Doctors
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>

                  {/* <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li> */}

                  {LogoutToggle ? (
                    <>
                      <li className="nav-item active">
                        <Link className="nav-link">
                          <strong>{name.split(" ")[0]}</strong>
                        </Link>
                      </li>
                      <li></li>

                      <li className="nav-item">
                        <Link className="nav-link" to={"/dashboard"}>
                          Dashboard
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={"/login"}
                          onClick={handleLogout}
                        >
                          Logout
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item active">
                        <Link className="nav-link" to={"/login"}>
                          Login
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
