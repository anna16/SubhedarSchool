import React from "react";
const MainSlider=()=>{
return (
    <>
     <section className="home-slider owl-carousel">
      <div className="slider-item" style={{backgroundImage:"url(images/bg_1.jpg)"}}>
      	<div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
          <div className="col-md-8 text-center ftco-animate">
            <h1 className="mb-4 secondary">Kids Are The Best <span>Explorers In The World</span></h1>
            <p><a href="#" className="btn btn-secondary px-4 py-3 mt-3">Read More</a></p>
          </div>
        </div>
        </div>
      </div>

      <div className="slider-item" style={{backgroundImage:"url(images/bg_2.jpg)"}}>
      	<div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
          <div className="col-md-8 text-center ftco-animate">
            <h1 className="mb-4">Perfect Learned<span> For Your Child</span></h1>
            <p><a href="#" className="btn btn-secondary px-4 py-3 mt-3">Read More</a></p>
          </div>
        </div>
        </div>
      </div>
    </section>

    <section className="ftco-services ftco-no-pb">
			<div className="container-wrap">
				<div className="row no-gutters">
          <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-primary">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-teacher"></span>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Vision</h3>
                <p>It is our vision with endearment for learning , working towards education, building confidence and creating a space for high esteem in every individual of the institution</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-tertiary">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-reading"></span>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Mission</h3>
                <p>We strive to make the school environment congenial, multi talent development and fostering creativity in free atmosphere.</p>
              </div>
            </div>    
          </div>
          <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-fifth">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-books"></span>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Book &amp; Library</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-quarternary">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-diploma"></span>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Certification</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>      
          </div>
        </div>
			</div>
		</section>
    </>
)
}

export default MainSlider