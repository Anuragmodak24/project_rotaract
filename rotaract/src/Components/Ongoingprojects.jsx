import React from "react"

export const Ongoingprojects=()=>{

    return(
        <>
  {/* ======= Our Services Section (on going) ======= */}
  <section id="services" className="services sections-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>On Going Projects</h2>
      <p>
        This are the projects which is Running right now
    
      </p>
    </div>
    <div className="row gy-4" data-aos="fade-up" data-aos-delay={100}>
      <div className="col-lg-4 col-md-6">
        <div className="service-item  position-relative">
          <div className="icon">
            <i className="bi bi-activity" />
          </div>
          <h3>Free Helath Cheackup</h3>
          <p>
          We have been organise Free Health Cheackup For the People who needs our Help.
          </p>
          
          <a href="#" className="readmore stretched-link">
            Read more <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
      {/* End Service Item */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className={"bi bi-droplet-fill"}
            ></i>
          </div>
          <h3>Blood Bank</h3>
          <p>
            Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
            Libero corrupti neque eum hic non ut nesciunt dolorem.
          </p>
          <a href="#" className="readmore stretched-link">
            Read more <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
      {/* End Service Item */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-easel" />
          </div>
          <h3>Free Education in School </h3>
          <p>
            Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus
            ea aut. Vel qui id voluptas adipisci eos earum corrupti.
          </p>
          <a href="#" className="readmore stretched-link">
            Read more <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* End Our Services Section */}



</>
    );
}
