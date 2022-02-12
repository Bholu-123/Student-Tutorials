import React, { useState } from 'react';
import  "../Style/Contact.css";

const Contact = () => {
  const [state,setState] = useState({
    "first-name":"",
    "last-name":"",
    "email-address":"",
    "contact-no":"",
    "remark": "",
    "edu-medium":"",
    "courses":"",
  })

  const handleInputChange = (e) => {
     const target = e.target;
     var value = target.value;
     const name = target.name;
     
     setState((prevState) => ({
       ...prevState,
       [name]: value
     }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setState((prevState) => ({
      ...prevState,
      "first-name": "",
      "last-name": "",
      "email-address": "",
      "contact-no": "",
      "remark": "",
      "edu-medium": "",
      "courses": "",
    }));
  }


    return (
      <section id="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">Contact Us</h2>
              {/* <div className="title-border">
                <span></span>
              </div> */}
            </div>
          </div>
        </div>

        <div id="address">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="list-unstyled">
                  <li>
                    <div className="add-icon">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="add-text">
                      <span>Address</span>
                      <br />
                      Ramtirth Markandi near municipal swimming pool, Chiplun,
                      <br />
                      Maharashtra 415605
                    </div>
                  </li>

                  <li>
                    <div className="add-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="add-text">
                      <span>Contact Number</span>
                      <br />
                      092721 88068
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contactForm-container">
          <div className="row justify-content-center">
            <div id="contact-form" className="col-md-7 col-xs-12">
              <div id="form">
                <form
                  onSubmit={handleSubmit}
                  className="form-container"
                  id="EnquiryForm"
                >
                  <div style={{ display: "none" }}>
                    <input type="hidden" name="_method" value="POST" />
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-xs-12 form-item required">
                      <p className="formLabel">First Name</p>
                      <input
                        name="first-name"
                        className="form-style"
                        maxLength="100"
                        type="text"
                        id="FirstName"
                        required="required"
                        value={state['first-name']}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-sm-6 col-xs-12 form-item required">
                      <p className="formLabel">Last Name</p>
                      <input
                        name="last-name"
                        className="form-style"
                        maxLength="100"
                        type="text"
                        id="LastName"
                        required="required"
                        value={state['last-name']}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6 col-xs-12 form-item required">
                      <p className="formLabel">Contact No.</p>
                      <input
                        name="contact-no"
                        className="form-style"
                        maxLength="255"
                        type="text"
                        id="ContactNo"
                        required="required"
                        value={state["contact-no"]}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-sm-6 col-xs-12 form-item required">
                      <p className="formLabel">Email ID.</p>
                      <input
                        name="email-address"
                        className="form-style"
                        maxLength="255"
                        type="text"
                        id="EmailAddress"
                        required="required"
                        value={state["email-address"]}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* <div className="row">
                    <div className="col-md-12 form-item">
                      <p className="formLabel">Place of Residence</p>
                      <textarea
                        name="enquiry-address"
                        className="form-style"
                        cols="30"
                        rows="6"
                        id="EnquiryAddress"
                        required="required"
                      ></textarea>
                    </div>
                  </div> */}

                  <div className="row justify-content-start">
                    {/* <div className="col-md-4 col-xs-12 form-item">
                      <select
                        name="branch-id"
                        className="form-style"
                        id="BranchId"
                        required="required"
                      >
                        <option value="">Select Branch</option>
                        <option value="1">Head Office - Chiplun</option>
                      </select>
                    </div> */}
                    <div className="col-md-6 col-xs-12 form-item">
                      <select
                        name="edu-medium"
                        className="form-style"
                        id="EnquiryMedium"
                        required="required"
                        value={state["edu-medium"]}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Medium</option>
                        <option value="English Medium">English Medium</option>
                        <option value="Marathi Medium">Marathi Medium</option>
                        <option value="Hindi Medium">Hindi Medium</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-xs-12 form-item">
                      <select
                        name="courses"
                        className="form-style"
                        id="EnquiryCourses"
                        required="required"
                        value={state["courses"]}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Course</option>
                        <option value="S.S.C.">S.S.C.</option>
                        <option value="SCIENCE">SCIENCE</option>
                        <option value="Math">MATHEMATICS</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-item">
                      <p className="formLabel">Your Message</p>
                      <textarea
                        name="remark"
                        className="form-style"
                        cols="30"
                        rows="6"
                        id="EnquiryRemark"
                        value={state["remark"]}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <div className="form-item">
                      <div className="submit">
                        <input
                          type="submit"
                          className="form-btn"
                          type="submit"
                          value="Submit"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="google-maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4765683308688!2d73.51952261487844!3d17.532482787991835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc20628f62d7d99%3A0xc04dfd0f00cf52cd!2sStudents%20Tutorial!5e0!3m2!1sen!2sin!4v1642522536115!5m2!1sen!2sin"
                  width="280"
                  height="350"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact
