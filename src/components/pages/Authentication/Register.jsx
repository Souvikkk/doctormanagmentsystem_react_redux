import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../../../Redux/AuthSlice";
import Layout from "../../Layout/Layout";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    phone: "",
    forget: "",
  };
  const [user, setUser] = useState(initialState);
  const [img, setImg] = useState("");
  const { redirectReg, loading } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", user?.name);
    formdata.append("email", user?.email);
    formdata.append("password", user?.password);
    formdata.append("phone", user?.phone);
    formdata.append("forget", user?.forget);
    formdata.append("image", img);

    dispatch(postRegister(formdata));
  };
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const redirectUser = () => {
    // let name = localStorage.getItem('name')
    // let isInRegisterPage = window.location.pathname.toLowerCase() === '/register'
    // if(name !== undefined && name !== null && name !== ''){
    //   isInRegisterPage && navigate('/login')
    // }
    if (redirectReg === "/login") {
      navigate("/login");
    } else {
      navigate("/register");
    }
  };

  useEffect(() => {
    redirectUser();
  }, [redirectReg]);
  return (
    <>
      <Layout title={"Register"}>
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
                      Registration
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label">
                            <strong>Name</strong>{" "}
                            <span className="err-msg">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={user?.name}
                            onChange={handleChange}
                            className="form-control"
                            pattern=".{3,}"
                            title="three or more characters"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <label className="form-label">
                          <strong>Email</strong>{" "}
                          <span className="err-msg">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={user?.email}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">
                          <strong>Password</strong>{" "}
                          <span className="err-msg">*</span>
                        </label>
                        <input
                          type="password"
                          value={user?.password}
                          name="password"
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">
                          <strong>Phone</strong>
                          <span className="err-msg">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={user?.phone}
                          onChange={handleChange}
                          className="form-control"
                          pattern="[0-9]{10}"
                          title="Ten characters"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">
                          <strong>Answer</strong>
                          <span className="err-msg">*</span>
                        </label>
                        <input
                          type="text"
                          name="forget"
                          value={user?.forget}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label">
                            <strong>Image</strong>
                          </label>
                          <input
                            type="file"
                            name="img"
                            onChange={(e) => setImg(e.target.files[0])}
                            accept="image/*"
                            className="form-control"
                            required
                          />
                          {img && (
                            <img
                              src={URL.createObjectURL(img)}
                              alt="Preview"
                              className="img-preview mt-2"
                              style={{ width: "80px", height: "80px" }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer"
                    style={{ backgroundColor: "#F4F9FC" }}
                  >
                    <button
                      className="btn btn-info btn-sm"
                      style={{ backgroundColor: "#E12454" }}
                    >
                      Register
                    </button>
                    <strong>
                      <p className="mt-2">
                        Already have an account?{" "}
                        <Link to="/login">Login here</Link>
                      </p>
                    </strong>
                  </div>
                </div>
              </form>
            </div>
            <div className="row mt-5"></div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Register;
