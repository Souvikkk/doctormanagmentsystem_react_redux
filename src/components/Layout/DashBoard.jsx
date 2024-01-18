import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../../Redux/DashboardSlice";
import moment from "moment";
import Layout from "./Layout";
const DashBoard = () => {
  const formatTime = (timeString) => {
    const time = new Date(`2000-01-01T${timeString}`);
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const UserImage = localStorage.getItem("image");
  const UserName = localStorage.getItem("name");
  const UserEmail = localStorage.getItem("email");
  const UserPhone = localStorage.getItem("phone");
  const id = localStorage.getItem("id");
  const { user_dash } = useSelector((state) => state?.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboard(id));
  }, [id]);
  return (
    <>
      <Layout title={"User_Profile"}>
        <section>
          <div className="container-fluid py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-6 mb-4 mb-lg-0">
                <div className="card mb-3" style={{ borderRadius: "1rem" }}>
                  <div className="row g-0">
                    <div
                      className="col-md-5 text-center text-white"
                      style={{
                        borderTopLeftRadius: ".5rem",
                        borderBottomLeftRadius: ".5rem",
                        backgroundColor: "#223A66",
                      }}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/bg/user.jpg`}
                        alt=""
                        className="img-fluid my-4"
                        style={{
                          width: 120,
                          height: 120,
                          borderRadius: "100%",
                        }}
                      />
                      <h4 className="text-white">{UserName}</h4>
                      <p >Email - {UserEmail}</p>
                      <p>Contact No - {UserPhone}</p>
                      <i className="far fa-edit mb-5" />
                      <i
                        className="flaticon-barbell"
                        style={{ fontSize: 40 }}
                      />
                    </div>
                    <div
                      className="col-md-7"
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <div className="card-body p-4">
                        <h6 className="text-black">Information</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6 className="text-black">Email</h6>
                            <p className="text-black">{UserEmail}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6 className="text-black">Phone</h6>
                            <p className="text-black">{UserPhone}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-xs-5">
                    <h2 style={{ color: "#FFFFFF" }}>
                      Your <b>Appointment</b>
                    </h2>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Date Created</th>
                    <th>Message</th>
                    <th>Department</th>
                    <th>Doctor</th>
                    <th>Time</th>
                    <th>Status</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {user_dash?.length > 0 ? (
                    user_dash.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/doc/docs4.jpg`}
                            className="avatar"
                            alt="Avatar"
                            style={{ width: "50px", height: "50px" }}
                          />{" "}
                          {UserName}
                        </td>
                        <td>{moment(item?.createdAt).format("L")}</td>
                        <td>{item?.message.slice(0, 10)}</td>
                        <td>{item?.department_id?.departmentName}</td>
                        <td>{item?.doctor_id?.name}</td>
                        <td>
                          {formatTime(item?.doctor_id?.aperture_time)} -{" "}
                          {formatTime(item?.doctor_id?.departure_time)}
                        </td>
                        <td>
                          {item?.isPending ? (
                            <span className="status text-success">&bull;</span>
                          ) : (
                            <span className="status text-danger">&bull;</span>
                          )}
                          {item?.isPending ? " Approved" : " Pending"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="8"
                        style={{ textAlign: "center", color: "red" }}
                      >
                        <strong> You don't have any appointments</strong>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DashBoard;
