import React from "react";
// import YoutubeEmbed from "./YoutubeEmbed";
const MainSlider = () => {
  return (
    <>
      <section className="home-slider owl-carousel">
        <div className="slider-item" style={{ backgroundImage: "url(images/bg_1.jpg)" }}>
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

        <div className="slider-item" style={{ backgroundImage: "url(images/bg_2.jpg)" }}>
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

      <section class="ftco-section bg-light">
        <div class="container">
          <div class="row justify-content-center pb-2">
            <div class="col-md-8 text-center heading-section ftco-animate">
              <h2 class="mb-4">Management Desk</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 ftco-animate">
              <div class="blog-entry">
                <a href="blog-single.html" class="block-20 d-flex align-items-end" style={{ backgroundImage: "url(images/Dr.UlhasKolhatkar-President.jpg)" }}>
                </a>
                <div class="text bg-white p-4">
                  <h3 class="heading mb-1">Dr. Ulhas Kolhatkar</h3>
                  <span class="subheading"><a href="#" class="mr-2">GEI, Dadar - President</a></span>
                  <p>General Education Institute, Dadar is one of the well-known education institutes, which deserves a long history...</p>
                  <div class="d-flex align-items-center mt-4">
                    <p class="mb-0"><a href="#" class="btn btn-secondary">Read More <span class="ion-ios-arrow-round-forward"></span></a></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 ftco-animate">
              <div class="blog-entry">
                <a href="blog-single.html" class="block-20 d-flex align-items-end" style={{ backgroundImage: "url(images/Mr.ShailendraSalvi-Chairman.jpg)" }}>
                </a>
                <div class="text bg-white p-4">
                  <h3 class="heading mb-1">Mr. Shailendra Salvi</h3>
                  <span class="subheading"><a href="#" class="mr-2">Chairman</a></span>
                  <p>Mr. Shailendra Salvi is the Chairman of General Education Institute...</p>
                  <div class="d-flex align-items-center mt-4">
                    <p class="mb-0"><a href="#" class="btn btn-secondary">Read More <span class="ion-ios-arrow-round-forward"></span></a></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 ftco-animate">
              <div class="blog-entry">
                <a href="blog-single.html" class="block-20 d-flex align-items-end" style={{ backgroundImage: "url(images/Mr.PrasadSardesai-Incharge.jpg)" }}>
                </a>
                <div class="text bg-white p-4">
                  <h3 class="heading mb-1">Mr. Prasad Sardesai</h3>
                  <span class="subheading"><a href="#" class="mr-2">Incharge</a></span>
                  <p>GEI Subhedar Wada, Kalyan Subhedar Wada School established at Kalyan in 1890 by General Education Institute...</p>
                  <div class="d-flex align-items-center mt-4">
                    <p class="mb-0"><a href="#" class="btn btn-secondary">Read More <span class="ion-ios-arrow-round-forward"></span></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section ftco-no-pt ftc-no-pb">
        <div class="container">
          <div class="row">
            <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
              <div class="text px-4 ftco-animate">
                <h2 class="mb-4">Welcome to Subhedar Wada English School</h2>
                <p>
                  <iframe width="540" height="338" src="https://www.youtube.com/embed/PUkWgdd15Ws" title="Subhedar Wada Vidya Sankul" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </p>
              </div>
            </div>
            <div class="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
              <h2 class="mb-4">What We Offer</h2>
              {/* <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p> */}
              <div class="row mt-5">
                <div class="col-lg-6">
                  <div class="services-2 d-flex">
                    <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-education"></span></div>
                    <div class="text">
                      <h3>Rich Education</h3>
                      <p>Rich and glorious heritage of education (Since 129 years)</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="services-2 d-flex">
                    <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-reading"></span></div>
                    <div class="text">
                      <h3>Other Languages</h3>
                      <p>Sanskrit and French Languages to be taught.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="services-2 d-flex">
                    <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-diploma"></span></div>
                    <div class="text">
                      <h3>Certified Teachers</h3>
                      <p>Well trained and educated teaching & non-teaching staff.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="services-2 d-flex">
                    <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-kids"></span></div>
                    <div class="text">
                      <h3>Other Activities</h3>
                      <p>Dance, Tabla, Music, Drawing and Tennis Activities</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="services-2 d-flex">
                    <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-jigsaw"></span></div>
                    <div class="text">
                      <h3>Creative Lessons</h3>
                      <p>Learning – Teaching method through Smart Board.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="services-2 d-flex">
                    <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-security"></span></div>
                    <div class="text">
                      <h3>Safety First</h3>
                      <p>Premises under CCTV surveillance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section bg-light">
        <div class="container">
          <div class="row justify-content-center pb-2">
            <div class="col-md-8 text-center heading-section ftco-animate">
              <h2 class="mb-4">Video Gallery</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 ftco-animate">
              <div class="blog-entry video-responsive">
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/EyBwepJ2lNM?si=o_ltgw5xvhffWWot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="text bg-white text-center">
                  <h3 class="heading mb-1">Ovi Waigankar</h3>
                  <span class="subheading"><a href="#" class="mr-2">Jr. Kg</a></span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 ftco-animate">
              <div class="blog-entry video-responsive">
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/qplsSS8N_vw?si=bR3vdy6512PXRLlt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="text bg-white text-center">
                  <h3 class="heading mb-1">Sujay Mangesh Ghule</h3>
                  <span class="subheading"><a href="#" class="mr-2">5th Std.</a></span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 ftco-animate">
              <div class="blog-entry video-responsive">
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/naMCCCb8rZo?si=kjAxihSCHd68OsmK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="text bg-white text-center">
                  <h3 class="heading mb-1">Kartik Ganesh Bodke</h3>
                  <span class="subheading"><a href="#" class="mr-2">2th Std.</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: "url(images/bg_4.jpg)" }} data-stellar-background-ratio="0.5">
    	<div class="container">
    		<div class="row justify-content-center mb-5 pb-2">
          <div class="col-md-8 text-center heading-section heading-section-black ftco-animate">
            <h2 class="mb-4"><span>20 Years of</span> Experience</h2>
            {/* <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p> */}
          </div>
        </div>	
    		<div class="row d-md-flex align-items-center justify-content-center">
    			<div class="col-lg-10">
    				<div class="row d-md-flex align-items-center">
		          <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
		            <div class="block-18">
		            	<div class="icon"><span class="flaticon-doctor"></span></div>
		              <div class="text">
		                <strong class="number" data-number="18">0</strong>
		                <span>Certified Teachers</span>
		              </div>
		            </div>
		          </div>
		          <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
		            <div class="block-18">
		            	<div class="icon"><span class="flaticon-doctor"></span></div>
		              <div class="text">
		                <strong class="number" data-number="351">0</strong>
		                <span>Successful Kids</span>
		              </div>
		            </div>
		          </div>
		          <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
		            <div class="block-18">
		            	<div class="icon"><span class="flaticon-doctor"></span></div>
		              <div class="text">
		                <strong class="number" data-number="564">0</strong>
		                <span>Happy Parents</span>
		              </div>
		            </div>
		          </div>
		          <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
		            <div class="block-18">
		            	<div class="icon"><span class="flaticon-doctor"></span></div>
		              <div class="text">
		                <strong class="number" data-number="300">0</strong>
		                <span>Awards Won</span>
		              </div>
		            </div>
		          </div>
	          </div>
          </div>
        </div>
    	</div>
        </section>

      <section class="ftco-gallery">
        <div class="container-wrap">
          <div class="row justify-content-center pb-2">
            <div class="col-md-8 text-center heading-section ftco-animate">
              <h2 class="mb-4">Event Gallery</h2>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-md-3 ftco-animate">
              <a href="images/PhotoGallery/PhotoGallery_1.jpg" class="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url(images/PhotoGallery/PhotoGallery_1.jpg)" }}>
                <div class="icon mb-4 d-flex align-items-center justify-content-center">
                  <span class="icon-zoom_in"></span>
                  {/* <span>bnnvbn</span> */}
                </div>
              </a>
            </div>
            <div class="col-md-3 ftco-animate">
              <a href="images/PhotoGallery/PhotoGallery_2.jpg" class="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url(images/PhotoGallery/PhotoGallery_2.jpg)" }}>
                <div class="icon mb-4 d-flex align-items-center justify-content-center">
                  <span class="icon-zoom_in"></span>
                </div>
              </a>
            </div>
            <div class="col-md-3 ftco-animate">
              <a href="images/PhotoGallery/PhotoGallery_3.jpg" class="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url(images/PhotoGallery/PhotoGallery_3.jpg)" }}>
                <div class="icon mb-4 d-flex align-items-center justify-content-center">
                  <span class="icon-zoom_in"></span>
                </div>
              </a>
            </div>
            <div class="col-md-3 ftco-animate">
              <a href="images/PhotoGallery/PhotoGallery_4.jpg" class="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url(images/PhotoGallery/PhotoGallery_4.jpg)" }}>
                <div class="icon mb-4 d-flex align-items-center justify-content-center">
                  <span class="icon-zoom_in"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainSlider