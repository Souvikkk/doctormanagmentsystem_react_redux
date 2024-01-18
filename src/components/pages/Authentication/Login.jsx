import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RegLog, postLogin } from "../../../Redux/AuthSlice";
import { ClipLoader } from "react-spinners";
import Layout from "../../Layout/Layout";

const Login = () => {
  const { redirectReg, redirectTo, loading } = useSelector(
    (state) => state?.auth
  );
  const initialState = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: user?.email,
      password: user?.password,
    };
    dispatch(postLogin(data));
  };
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const RedirectUser = () => {
    let token = localStorage.getItem("token");
    // let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

    if (token !== null || token !== undefined || token !== "") {
      // window.location.pathname = getPathname;
      navigate("/");
    }
  };
  useEffect(() => {
    RedirectUser();
    // redirectUser
    navigate(redirectTo);
  }, [redirectTo]);

  const regLog = () => {
    dispatch(RegLog());
  };
  return (
    <>
      <Layout title={"Login"}>
        <div className="container">
          <div className="row mt-5">
            <div className="col-6 mx-auto mb-5">
              <form onSubmit={handleSubmit}>
                <div className="card shadow p-3">
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#223A66" }}
                  >
                    <h4 className="text-center" style={{ color: "#FFFFFF" }}>
                      Login
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label">
                            <strong>Email</strong>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={user?.email}
                            className="form-control"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label">
                            <strong>Password</strong>
                          </label>
                          <input
                            type="password"
                            name="password"
                            value={user?.password}
                            className="form-control"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {loading ? (
                    <div
                      className="card-footer"
                      style={{ backgroundColor: "#F4F9FC" }}
                    >
                      <button
                        className="btn btn-info btn-sm"
                        style={{ backgroundColor: "#E12454" }}
                      >
                        Login <ClipLoader color="#36d7b7" />{" "}
                      </button>
                      <strong>
                        <p className="mt-2">
                          Don't have an account?{" "}
                          <Link onClick={regLog} to="/register">
                            Register here
                          </Link>
                        </p>
                      </strong>
                    </div>
                  ) : (
                    <div
                      className="card-footer"
                      style={{ backgroundColor: "#F4F9FC" }}
                    >
                      <button
                        className="btn btn-info btn-sm"
                        style={{ backgroundColor: "#E12454" }}
                      >
                        Login
                      </button>
                      <strong>
                        <p className="mt-2">
                          Don't have an account?{" "}
                          <Link to="/register">Register here</Link>
                        </p>
                      </strong>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
