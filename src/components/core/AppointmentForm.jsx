import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllDep } from "../../Redux/AllDepOnlySlice";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";


const AppointmentForm = () => {
  const { alldept_data, loading } = useSelector((state) => state?.alldept);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchAllDep());
  }, [dispatch]);
  return (
    <>
    <Layout title={'Appointment_form'}>
    <div>
        <section className="section service-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h2 className="mb-4">Select your service</h2>
                  <div className="divider mx-auto my-4"></div>
                  <p>
                  Lets know more necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              {alldept_data?.data?.map((item, index) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="service-block mb-5">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/doc/docs2.jpg`}
                          alt=""
                          className="img-fluid"
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div className="content">
                          <h4 className="mt-4 mb-2 title-color">
                            {item?.departmentName}
                          </h4>
                          <p className="mb-4">{item?.description.slice(0, 100)}</p>
                          <Link to={`/all-doctors/${item?._id}`} className="btn btn-main btn-round-full">Make Appointment  <i className="icofont-simple-right ml-2"></i></Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <section className="section cta-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="cta-content">
                  <div className="divider mb-4"></div>
                  <h2 className="mb-5 text-lg">
                    We are pleased to offer you the{" "}
                    <span className="title-color">chance to have the healthy</span>
                  </h2>
                  <Link
                    to="/appointmentform"
                    className="btn btn-main-2 btn-round-full"
                  >
                    Get appoinment<i className="icofont-simple-right  ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
     
    </>
  )
}

export default AppointmentForm