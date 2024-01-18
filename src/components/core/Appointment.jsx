import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleDoctorDetails } from "../../Redux/SingleDoctorSlice";
import { PostAppointment } from "../../Redux/PostAppointementSlice";
import moment from "moment";
import Layout from "../Layout/Layout";

const Appointment = () => {
  // Function to format time to AM/PM format
  const formatTime = (timeString) => {
    const time = new Date(`2000-01-01T${timeString}`);
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const { single_doctor_details } = useSelector(
    (state) => state?.single_doctor
  );

  const user_name = localStorage.getItem("name");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const user_id = localStorage.getItem("id");
  const department_id = single_doctor_details?.data?.department_id?._id;
  const doctor_id = single_doctor_details?.data?._id;

  const id = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleDoctorDetails(id));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      PostAppointment({ user_id, department_id, doctor_id, phone, message })
    );
  };

  return (
    <>
      <Layout title={"Final_Appointment"}>
        <section className="page-title bg-1">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Book your Seat</span>
                  <h1 className="text-capitalize mb-5 text-lg">Appoinment</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="appoinment section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="mt-3">
                  <div className="feature-icon mb-3">
                    <i className="icofont-support text-lg"></i>
                  </div>
                  <span className="h3">Call for an Emergency Service!</span>
                  <h2 className="text-color mt-3">+70 016 00 532 </h2>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                  <h2 className="mb-2 title-color">Book an appoinment</h2>
                  <p className="mb-4">
                    Mollitia dicta commodi est recusandae iste, natus eum
                    asperiores corrupti qui velit . Iste dolorum atque similique
                    praesentium soluta.
                  </p>

                  <form
                    id="#"
                    className="appoinment-form"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>
                              {
                                single_doctor_details?.data?.department_id
                                  ?.departmentName
                              }
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect2"
                          >
                            <option>{single_doctor_details?.data?.name}</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            readonly
                            type="text"
                            value={moment(
                              single_doctor_details?.data?.date
                            ).format("L")}
                            className="form-control"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            readonly
                            type="text"
                            value={`${formatTime(
                              single_doctor_details?.data?.aperture_time
                            )} - ${formatTime(
                              single_doctor_details?.data?.departure_time
                            )}`}
                            className="form-control"
                            placeholder="Appointment Time"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            readonly
                            type="text"
                            value={user_name}
                            className="form-control"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="phone"
                            id="phone"
                            type="Number"
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group-2 mb-4">
                      <textarea
                        name="message"
                        id="message"
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-control"
                        rows="6"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>

                    <button className="btn btn-main btn-round-full">
                      Make Appointment
                      <i className="icofont-simple-right ml-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Appointment;
