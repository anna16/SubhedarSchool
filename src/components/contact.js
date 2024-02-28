import React from "react";
const Contact = () => {
	return (
		<>
			<section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url(images/bg_2.jpg)" }}>
				<div className="overlay"></div>
				<div className="container">
					<div className="row no-gutters slider-text align-items-center justify-content-center">
						<div className="col-md-9 ftco-animate text-center">
							<h1 className="mb-2 bread">Contact</h1>
							<p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>About us <i className="ion-ios-arrow-forward"></i></span></p>
						</div>
					</div>
				</div>
			</section>

			<section class="ftco-section contact-section">
				<div class="container">
					<div class="row d-flex mb-5 contact-info">
						<div class="col-md-3 d-flex">
							<div class="bg-light align-self-stretch box p-4 text-center">
								<h3 class="mb-4">Address</h3>
								<p>G.E.I.'S SUBHEDARWADA ENGLISH MEDIUM SCHOOL
									Gandhi Chowk, Kalyan (W),
									Thane, Maharashtra,
									Pincode:- 421301</p>
							</div>
						</div>
						<div class="col-md-3 d-flex">
							<div class="bg-light align-self-stretch box p-4 text-center">
								<h3 class="mb-4">Contact Number</h3>
								<p><a href="tel://02512201110">0251-2201110</a></p>
								<p><a href="tel://9619743661">+91 9619743661</a></p>
								<p><a href="tel://9594204378">+91 9594204378</a></p>
							</div>
						</div>
						<div class="col-md-3 d-flex">
							<div class="bg-light align-self-stretch box p-4 text-center">
								<h3 class="mb-4">Email Address</h3>
								<p><a href="mailto:subhedarwada.eng@gmail.com">subhedarwada.eng@gmail.com</a></p>
								<p><a href="mailto:info@subhedarwadaenglishschool.in">info@subhedarwadaenglishschool.in</a></p>
							</div>
						</div>
						<div class="col-md-3 d-flex">
							<div class="bg-light align-self-stretch box p-4 text-center">
								<h3 class="mb-4">Website</h3>
								<p><a target="_blank" href="https://www.subhedarwadaenglishschool.in/">subhedarwadaenglishschool.in</a></p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="ftco-section ftco-no-pt ftco-no-pb contact-section">
				<div class="container">
					<div class="row d-flex align-items-stretch no-gutters">
						<div class="col-md-6 p-4 p-md-5 order-md-last bg-light">
							<form action="#">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Your Name" />
								</div>
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Your Email" />
								</div>
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Subject" />
								</div>
								<div class="form-group">
									<textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
								</div>
								<div class="form-group">
									<input type="submit" value="Send Message" class="btn btn-primary py-3 px-5" />
								</div>
							</form>
						</div>
						<div class="col-md-6 d-flex align-items-stretch">
							{/* <div id="map"></div> */}
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.9081422200115!2d73.12199276437927!3d19.242834701708755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5434478bba2d0fee!2sGEIs+Subhedar+Wada+High+School!5e0!3m2!1sen!2sin!4v1559636330754!5m2!1sen!2sin"
								width="100%"  style={{ border: "0" }} allowfullscreen="" loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

export default Contact