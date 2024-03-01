import React from "react";
const PhotoGallery = () => {
	return (
		<>
			<section>
				<div className="overlay"></div>
				<div className="container">
					<div className="row no-gutters slider-text align-items-center justify-content-center">
						<div className="col-md-9 ftco-animate text-center">
							<h1 className="mb-2 bread">Event Gallery</h1>
							{/* <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>About us <i className="ion-ios-arrow-forward"></i></span></p> */}
						</div>
					</div>
				</div>
			</section>

			<section class="ftco-gallery">
				<div class="container-wrap">
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

export default PhotoGallery