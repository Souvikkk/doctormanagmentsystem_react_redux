import React from "react";
import ContactUs from "../core/ContactUs";
import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <>
      <Layout title={"Contact"}>
        <div>
          <section className="page-title bg-1">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block text-center">
                    <span className="text-white">Contact Us</span>
                    <h1 className="text-capitalize mb-5 text-lg">
                      Get in Touch
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section contact-info pb-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="contact-block mb-4 mb-lg-0">
                    <i className="icofont-live-support"></i>
                    <h5>Call Us</h5>
                    +700-160-0532
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="contact-block mb-4 mb-lg-0">
                    <i className="icofont-support-faq"></i>
                    <h5>Email Us</h5>
                    contact@mail.com
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="contact-block mb-4 mb-lg-0">
                    <i className="icofont-location-pin"></i>
                    <h5>Location</h5>
                    Sector V,Kolkata
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ContactUs />

          {/* <MyMap googleMapLink={googleMapLink} /> */}
        </div>
      </Layout>
    </>
  );
};

export default Contact;
