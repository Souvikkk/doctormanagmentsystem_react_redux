import React from 'react'
import FeaturedDoctors from '../core/FeaturedDoctors'
import ChildCare from '../core/ChildCare'
import PersonalCare from '../core/PersonalCare'
import Layout from '../Layout/Layout'

const About = () => {
  return (
    <>
    <Layout title={'About'}>
    <div>
      <section className="page-title bg-1">
  <div className="overlay"></div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">About Us</span>
          <h1 className="text-capitalize mb-5 text-lg">About Us</h1>

          
        </div>
      </div>
    </div>
  </div>
</section>

<PersonalCare/>

<ChildCare/>



<FeaturedDoctors/>


    </div>
    </Layout>
      
    </>
  )
}

export default About