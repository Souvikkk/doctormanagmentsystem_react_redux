import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchAllDoctorsbyDEP } from "../../Redux/DocByDepSlice";
import Layout from "../Layout/Layout";

const DoctorsByDep = () => {
  const { doc_by_dep_details } = useSelector((state) => state?.docbydep);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDoctorsbyDEP(id));
  }, [dispatch, id]);

  const data = doc_by_dep_details?.data || [];

  const firstDepartmentName =
    data.length > 0 ? data[0].department_id.departmentName : "";
  console.log("docbydep", doc_by_dep_details);
  return (
    <>
      <Layout title={"All_Doctors"}>
        <div>
          <section className="page-title bg-1">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block text-center">
                    <span className="text-white">All Doctors of</span>
                    <h1 className="text-capitalize mb-5 text-lg">
                      {firstDepartmentName} Department
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section service-2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                  <div className="section-title">
                    <h2>Best Doctors</h2>
                    <div className="divider mx-auto my-4"></div>
                    <p>
                      Lets know moreel necessitatibus dolor asperiores illum
                      possimus sint voluptates incidunt molestias nostrum
                      laudantium. Maiores porro cumque quaerat.
                    </p>
                  </div>
                </div>
              </div>

              <section className="section service-2">
                <div className="container">
                  <div className="row">
                    {data?.map((item, index) => (
                      <div key={index} className="col-md-4">
                        <div
                          className="card mb-3 shadow-sm border-0"
                          style={{ maxWidth: "300px" }}
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/images/alldoc/alldoc.webp`}
                            alt=""
                            className="card-img-top"
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{item?.name}</h5>
                            <p className="card-text">
                              {item?.description.slice(0, 100)}
                            </p>
                            <Link
                              to={`/doctor-single/${item?._id}`}
                              className="btn btn-main btn-round-full"
                            >
                              Make Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default DoctorsByDep;
