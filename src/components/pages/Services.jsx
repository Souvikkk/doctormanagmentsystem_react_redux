import React from "react";
import AllDepartment from "../core/AllDepartment";
import Layout from "../Layout/Layout";

const Services = () => {
  return (
    <>
      <Layout title={"Service"}>
        <div>
          <section className="page-title bg-1">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block text-center">
                    <span className="text-white">Our services</span>
                    <h1 className="text-capitalize mb-5 text-lg">What We Do</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <AllDepartment />
        </div>
      </Layout>
    </>
  );
};

export default Services;
