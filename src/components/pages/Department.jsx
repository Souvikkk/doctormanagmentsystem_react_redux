import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FetchAllDep } from "../../Redux/AllDepOnlySlice";
import { GridLoader } from "react-spinners";
import Layout from "../Layout/Layout";

const Department = () => {
  const dispatch = useDispatch();

  const { alldept_data, loading } = useSelector((state) => state?.alldept);
  // console.log(all_dep_data);

  useEffect(() => {
    dispatch(FetchAllDep());
  }, [dispatch]);
  return (
    <>
      <Layout title={"Department"}>
        <div>
          <section className="page-title bg-1">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block text-center">
                    <span className="text-white">All Department</span>
                    <h1 className="text-capitalize mb-5 text-lg">
                      Care Department
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
                    <h2>Award winning patient care</h2>
                    <div className="divider mx-auto my-4"></div>
                    <p>
                      Lets know moreel necessitatibus dolor asperiores illum
                      possimus sint voluptates incidunt molestias nostrum
                      laudantium. Maiores porro cumque quaerat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                {loading === true ? (
                  <div style={{ margin: "auto" }}>
                    <GridLoader color="#36d7b7" />{" "}
                  </div>
                ) : (
                  alldept_data?.data?.map((item, index) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-6 ">
                          <div className="department-block mb-5">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/doc/docs2.jpg`}
                              alt=""
                              className="img-fluid w-100"
                              style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="content">
                              <h4 className="mt-4 mb-2 title-color">
                                {item?.departmentName}
                              </h4>
                              <p className="mb-4">
                                {item?.description.slice(0, 100)}
                              </p>
                              <Link
                                to={`/all-doctors/${item?._id}`}
                                className="read-more"
                              >
                                Learn More{" "}
                                <i className="icofont-simple-right ml-2"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                )}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Department;
