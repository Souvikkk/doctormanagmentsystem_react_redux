import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDocDepSlice } from "../../Redux/AllDocDepSlice";
import { Link } from "react-router-dom";
import { GridLoader } from "react-spinners";
import Layout from "../Layout/Layout";

const Doctors = () => {
  const { all_doc_dep_data, status } = useSelector((state) => state?.alldoc);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(GetAllDep());
    // dispatch(GetDepDocDetails());
    dispatch(fetchAllDocDepSlice());
  }, [dispatch]);

  return (
    <>
      <Layout title={"Doctors"}>
        <div>
          <section className="page-title bg-1">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block text-center">
                    <span className="text-white">All Doctors</span>
                    <h1 className="text-capitalize mb-5 text-lg">
                      Specialized Doctors
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container mt-5">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                ></div>
              </div>

              <div className="row shuffle-wrapper portfolio-gallery">
                {status === "loading" ? (
                  <div style={{ margin: "auto" }}>
                    <GridLoader color="#36d7b7" />{" "}
                  </div>
                ) : (
                  all_doc_dep_data?.data?.map((item, index) => (
                    <>
                      <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="team-block mb-5 mb-lg-0">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/alldoc/alldoc.webp`}
                            alt="Doctor"
                            className="img-fluid w-100"
                            style={{ width: "250px", height: "170px" }}
                          />

                          <div className="content">
                            <h4 className="mt-4 mb-0">
                              <Link to={`/doctor-single/${item?._id}`}>
                                {item?.name}
                              </Link>
                            </h4>
                            <p>
                              {item?.department_details?.[0]?.departmentName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                )}
              </div>
            </div>
          </div>

          <section className="section cta-page">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="cta-content">
                    <div className="divider mb-4"></div>
                    <h2 className="mb-5 text-lg">
                      We are pleased to offer you the{" "}
                      <span className="title-color">
                        chance to have the healthy
                      </span>
                    </h2>
                    <Link
                      to="/appoinmentform"
                      className="btn btn-main-2 btn-round-full"
                    >
                      Get Appointment{" "}
                      <i className="icofont-simple-right ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Doctors;
