import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleDoctorDetails } from "../../Redux/SingleDoctorSlice";
import Layout from "../Layout/Layout";

const DoctorSingle = () => {
  const { single_doctor_details } = useSelector(
    (state) => state?.single_doctor
  );
  const dispatch = useDispatch();

  const id = useParams();

  const formatTime = (timeString) => {
    const time = new Date(`2000-01-01T${timeString}`);
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  useEffect(() => {
    dispatch(fetchSingleDoctorDetails(id));
  }, [id]);

  console.log("det", single_doctor_details);
  return (
    <>
      <Layout title={"Doctor"}>
        <div>
          <section className="page-title bg-1">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block text-center">
                    <span className="text-white">Doctor Details</span>
                    <h1 className="text-capitalize mb-5 text-lg">
                      {single_doctor_details?.data?.name}
                    </h1>
                    <p>
                      <strong>Department - </strong>
                      {
                        single_doctor_details?.data?.department_id
                          ?.departmentName
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section doctor-single">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="doctor-img-block">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/doc/docs4.jpg`}
                      alt=""
                      className="img-fluid w-100"
                      style={{ width: "180px", height: "400px" }} // Adjust the width and height according to your preference
                    />

                    <div className="info-block mt-4">
                      <h4 className="mb-0">
                        {single_doctor_details?.data?.name}
                      </h4>
                      <p>
                        <strong>Department- </strong>
                        {
                          single_doctor_details?.data?.department_id
                            ?.departmentName
                        }
                      </p>

                      <ul className="list-inline mt-4 doctor-social-links">
                        <li className="list-inline-item">
                          <a href="#!">
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#!">
                            <i className="icofont-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#!">
                            <i className="icofont-skype"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#!">
                            <i className="icofont-linkedin"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#!">
                            <i className="icofont-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 col-md-6">
                  <div className="doctor-details mt-4 mt-lg-0">
                    <h2 className="text-md">Introducing to myself</h2>
                    <div className="divider my-4"></div>

                    <p>{single_doctor_details?.data?.description}</p>

                    <Link
                      to={`/appointment/${single_doctor_details?.data?._id}`}
                      className="btn btn-main-2 btn-round-full mt-3"
                    >
                      Make an Appoinment
                      <i className="icofont-simple-right ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section doctor-skills">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <h3>My skills</h3>
                  <div className="divider my-4"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                    architecto voluptatem alias, aspernatur voluptatibus
                    corporis quisquam? Consequuntur, ad, doloribus, doloremque
                    voluptatem at consectetur natus eum ipsam dolorum iste
                    laudantium tenetur.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="skill-list">
                    <h5 className="mb-4">Expertise area</h5>
                    <ul className="list-unstyled department-service">
                      <li>
                        <i className="icofont-check mr-2"></i>International Drug
                        Database
                      </li>
                      <li>
                        <i className="icofont-check mr-2"></i>Stretchers and
                        Stretcher Accessories
                      </li>
                      <li>
                        <i className="icofont-check mr-2"></i>Cushions and
                        Mattresses
                      </li>
                      <li>
                        <i className="icofont-check mr-2"></i>Cholesterol and
                        lipid tests
                      </li>
                      <li>
                        <i className="icofont-check mr-2"></i>Critical Care
                        Medicine Specialists
                      </li>
                      <li>
                        <i className="icofont-check mr-2"></i>Emergency
                        Assistance
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sidebar-widget  gray-bg p-4">
                    <h5 className="mb-4">Make Appoinment</h5>

                    <ul className="list-unstyled lh-35">
                      <li className="d-flex justify-content-between align-items-center">
                        <span>Monday - Friday</span>
                        <span>
                          {formatTime(
                            single_doctor_details?.data?.aperture_time
                          )}{" "}
                          -{" "}
                          {formatTime(
                            single_doctor_details?.data?.departure_time
                          )}
                        </span>
                      </li>

                      <li className="d-flex justify-content-between align-items-center">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>

                    <div className="sidebar-contatct-info mt-4">
                      <p className="mb-0">Need Urgent Help?</p>
                      <h3 className="text-color-2">+23-4565-65768</h3>
                    </div>
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

export default DoctorSingle;
