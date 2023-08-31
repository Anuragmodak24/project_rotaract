import React from "react"
import { Ongoingprojects } from "./Ongoingprojects";
import { Hero } from "./Hero";
import { Aboutus } from "./Aboutus";
import { Video } from "./Video";
import { Ourteam } from "./Ourteam";
import { Contactus } from "./Contactus";

export const Home =()=>{

    return(
<>
 
  {/* ======= Hero Section ======= */}
  <Hero/>
  {/* End Hero Section */}
  <main id="main">
    {/* ======= About Us Section ======= */}
   <Aboutus/>
    {/* End About Us Section */}
   
    {/* ======= Call To Action Section ======= */}
   <Video/>
    {/* End Call To Action Section */}
  {/* og projeces  */}
  <Ongoingprojects/>
  {/* og projects */}
    
    {/* ======= Our Team Section ======= */}
   <Ourteam/>
    {/* End Our Team Section */}
    {/* notice */}

    {/* ======= Contact Section ======= */}
   <Contactus/>
    {/* End Contact Section */}
  </main>
  {/* End #main */}
 
</>
    );
}