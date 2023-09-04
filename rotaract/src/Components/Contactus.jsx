import React , { useState } from "react";
import axios from "axios";

const contactData=(user)=>{
  axios.post("http://127.0.0.1:8001/v1/api/contact",user)
  .then((res)=>alert(res.data))
  .catch((err)=>alert(err.message))


}

export const Contactus =()=>{
  const [contact,setContact]= useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })

  const hadnleInput=(e)=>{
    const {name,value}=e.target
    setContact({...contact,[name]:value})
    
  }

  const handleSign=(e)=>{
    e.preventDefault()
    contactData(contact)
    setContact({
      name:"",
      email:"",
      subject:"",
      message:""
    })
  }
    return(
        <>


      <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact</h2>
    <div>
     <iframe
     style={{ border: 0, width: "100%", height: 350 }}
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57110.89168820101!2d88.67885705753288!3d26.5384271680474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e479c5004a5a15%3A0x85c9f1dbb5913ced!2sR.G.%20Technologies!5e0!3m2!1sen!2sin!4v1693831939685!5m2!1sen!2sin"
     frameBorder={0}
     allowFullScreen=""
    />
         </div>
          <p>
            Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam
            porro nihil id ratione ea sunt quis dolorem dolore earum
          </p>
        </div>
        <div className="row gx-lg-0 gy-4">
          <div className="col-lg-4">
            <div className="info-container d-flex flex-column align-items-center justify-content-center">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h4>Location:</h4>
                  <p>Rajbari para,Jalpaiguri,Westbengal,India</p>
                </div>
              </div>
              {/* End Info Item */}
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h4>Email:</h4>
                  <p>anuragmodak24@gmail.com</p>
                </div>
              </div>
              {/* End Info Item */}
              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0" />
                <div>
                  <h4>Call:</h4>
                  <p>+91 9641776822</p>
                </div>
              </div>
              {/* End Info Item */}
             
              {/* End Info Item */}
            </div>
          </div>
          <div className="col-lg-8">
            <form
             onSubmit={handleSign}
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name='name'
                    value={contact.name}
                    onChange={hadnleInput}
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                   
                    name='email'
            value={contact.email}
            onChange={hadnleInput}
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name='subject'
            value={contact.subject}
            onChange={hadnleInput}
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name='message'
                  value={contact.message}
                  onChange={hadnleInput}
                  rows={7}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
        </>
    );
}