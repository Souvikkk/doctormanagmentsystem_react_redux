import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postContact } from '../../Redux/PostContactSlice'

const ContactUs = () => {

  const [user,setUser] =useState({
    name:'',
    email:'',
    topic:'',
    phone:'',
    msg:''
  })
  const dispatch =useDispatch()

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(postContact(user))
  }
  const handleChange =(e)=>{
    setUser((prevState)=>{
      return{...prevState,[e.target.name]:e.target.value}
    })
    setUser('')
  }


  return (
    <>
  <section className="contact-form-wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="text-md mb-2">Contact us</h2>
                <div className="divider mx-auto my-4"></div>
                <p className="mb-5">
                  Laboriosam exercitationem molestias beatae eos pariatur,
                  similique, excepturi mollitia sit perferendis maiores ratione
                  aliquam?
                </p>
              </div>
            </div>
          </div>

          <form id="contact-form" className="contact__form" onSubmit={(e) => handleSubmit(e)} >
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group" style={{border:'1px solid grey',borderRadius:'5px'}}>
                  <input
                    name="name"
                    id="name"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Your Full Name"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group" style={{border:'1px solid grey',borderRadius:'5px'}}>
                  <input
                    name="email"
                    id="email"
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group" style={{border:'1px solid grey',borderRadius:'5px'}}>
                  <input
                    name="topic"
                    id="topic"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Your Query Topic"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group" style={{border:'1px solid grey',borderRadius:'5px'}}>
                  <input
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group-2 mb-4" style={{border:'1px solid grey',borderRadius:'5px'}}>
              <textarea
                name="msg"
                id="msg"
                type="text"
                className="form-control"
                rows="8"
                placeholder="Your Message"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div>
              <input
                className="btn btn-main btn-round-full"
                name="submit"
                type="submit"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactUs

