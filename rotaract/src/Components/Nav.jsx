import React from "react";
// import pic1 from "../Images/img3.jpeg";
import { Header } from "./Header";
export const Nav = () => {
  return (
    <>
      {/* ======= Header ======= */}
      <Header />
      {/* End Top Bar */}
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            {/* <img src={pic1} alt="logo" /> */}
            <h1>
              Rotaract(Dremers and Doers)<span>.</span>
            </h1>
          </a>
          <nav id="navbar" className="navbar order-last order-lg-0">
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
                <a href="/signup" >Register Here</a>
              </li>
              <li>
                <a href="/donor" >Donate Here</a>
              </li>
            </ul>
          </nav>
          {/* .navbar */}
            <button
              className="btn btn-ghost d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"  
            >
              <i style={{color:"white"}} className="bi bi-list mobile-nav-toggle" />
            </button>
          <div
            className="offcanvas offcanvas-top"
            tabIndex="1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel">
            <div className="offcanvas-header">
              <h5 id="offcanvasTopLabel">Offcanvas top</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">...</div>
          </div>
        </div>
      </header>
      {/* End Header */}
      {/* End Header */}
    </>
  );
};
