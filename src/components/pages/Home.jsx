import React from "react";
import { Link } from "react-router-dom";
import FeaturedDoctors from "../core/FeaturedDoctors";
import AllDepartment from "../core/AllDepartment";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <>
      <Layout title={'Home'}>
        <div>
          <section className="banner">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-xl-7">
                  <div className="block">
                    <div className="divider mb-3"></div>
                    <span className="text-uppercase text-sm letter-spacing ">
                      Total Health care solution
                    </span>
                    <h1 className="mb-3 mt-3">
                      Your most trusted health partner
                    </h1>

                    <p className="mb-4 pr-5">
                      A repudiandae ipsam labore ipsa voluptatum quidem quae
                      laudantium quisquam aperiam maiores sunt fugit, deserunt
                      rem suscipit placeat.
                    </p>
                    {/* <img src="images/newlogo.png" alt="Banner Image"/> */}
                    <div className="btn-container ">
                      <Link
                        to="/appointmentform"
                        className="btn btn-main-2 btn-icon btn-round-full"
                      >
                        Make appoinment{" "}
                        <i className="icofont-simple-right ml-2  "></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="features">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="feature-block d-lg-flex">
                    <div className="feature-item mb-5 mb-lg-0">
                      <div className="feature-icon mb-4">
                        <i className="icofont-surgeon-alt"></i>
                      </div>
                      <span>24 Hours Service</span>
                      <h4 className="mb-3">Online Appoinment</h4>
                      <p className="mb-4">
                        Get ALl time support for emergency.We have introduced
                        the principle of family medicine.
                      </p>
                      <Link
                        to="/appointmentform"
                        className="btn btn-main btn-round-full"
                      >
                        Make a appoinment
                      </Link>
                    </div>

                    <div className="feature-item mb-5 mb-lg-0">
                      <div className="feature-icon mb-4">
                        <i className="icofont-ui-clock"></i>
                      </div>
                      <span>Timing schedule</span>
                      <h4 className="mb-3">Working Hours</h4>
                      <ul className="w-hours list-unstyled">
                        <li className="d-flex justify-content-between">
                          Sun - Wed : <span>8:00 - 17:00</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          Thu - Fri : <span>9:00 - 17:00</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          Sat - sun : <span>10:00 - 17:00</span>
                        </li>
                      </ul>
                    </div>

                    <div className="feature-item mb-5 mb-lg-0">
                      <div className="feature-icon mb-4">
                        <i className="icofont-support"></i>
                      </div>
                      <span>Emegency Cases</span>
                      <h4 className="mb-3">1-800-700-6200</h4>
                      <p>
                        Get ALl time support for emergency.We have introduced
                        the principle of family medicine.Get Conneted with us
                        for any urgency .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FeaturedDoctors />

          <AllDepartment />
        </div>
      </Layout>
    </>
  );
};

export default Home;
