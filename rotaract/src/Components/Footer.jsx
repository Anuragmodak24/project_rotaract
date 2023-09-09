import React from "react"
import pic1 from '../Images/img3.jpeg';
export const Footer =()=>{

    return(
        <>
 {/* ======= Footer ======= */}
 <footer id="footer" className="footer">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-info">
        <a href="/" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <img src={pic1} alt="logo"  />
        <h1>

        </h1>
      </a>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus.
          </p>
          <div className="social-links d-flex mt-4">
            <a href="#" className="twitter">
              <i className="bi bi-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
          <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/aboutus">About</a>
              </li>
              <li>
                <a href="/ongoingpro">On Going Projects</a>
              </li>
              <li>
                <a href="/ourteam">Team</a>
              </li>
              <li>
                <a href="/notice">Notice</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/contactus">Contact</a>
              </li>
              <li>
                <a href="/donor" >Donate Here</a>
              </li>
              <li>
                <a href="/signup" >Register Here</a>
              </li>
            </ul>
            </ul>
        
        </div>
        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>
           Raikot Para,Near Rajbari<br />
           Jalpaiguri,WestBengal ,Pin-735101
            <br />
            India <br />
            <br />
            <strong>Phone:</strong> +91 9641776822
            <br />
            <strong>Email:</strong> anuragmodak24@gmail.com
            <br />
          </p>
        </div>
      </div>
    </div>
    <div className="container mt-4">
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>Rotaract</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/impact-bootstrap-business-website-template/ */}
        Designed by <a href="https://www.instagram.com/anurag_jk/?igshid=YmMyMTA2M2Y%3D">Anurag Modak</a>
      </div>
    </div>
  </footer>
  {/* End Footer */}
  {/* End Footer */}
        </>
    );
}